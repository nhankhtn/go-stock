const { Kafka: KafkaJS } = require("kafkajs");
const Stock = require("../../models/Stock")

class Kafka {
    constructor() {
        this.kafka = new KafkaJS({
            clientId: 'go-stock',
            brokers: [process.env.URL_KAFKA]
        });
        this.producer = this.kafka.producer();
        this.consumer = this.kafka.consumer({ groupId: 'stock-group' });
    }
    async runProducer() {
        try {
            await this.producer.connect();
            console.log('Kafka Producer Connected');
        } catch (err) {
            console.log("Can't connect with Kafka Producer, error: ", err);
        }
    }
    async sendMessage(message) {
        try {
            await this.producer.send({
                topic: 'stock-data',
                messages: [{ value: JSON.stringify(message) }],
            });
        } catch (err) {
            console.log("Can't send message, error: ", err);
        }
    }
    async runConsumer() {
        try {
            await this.consumer.connect();
            await this.consumer.subscribe({ topic: 'stock-data' });

            await this.consumer.run({
                eachMessage: async ({ message }) => {
                    const stockData = JSON.parse(message.value.toString());
                    const stock = await Stock.find(stockData);
                    if (stock.length > 0) return;
                    await Stock.create(stockData);
                },
            });
        } catch (err) {
            console.log("Can't connect with Kafka Consumer, error: ", err);

        }
    }
}

module.exports = new Kafka();
