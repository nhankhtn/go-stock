const { Kafka: KafkaJS } = require("kafkajs");
const Stock = require("../../models/Stock")

class Kafka {
    constructor() {
        this.kafka = new KafkaJS({
            clientId: 'go-stock',
            brokers: ['localhost:9092']
        });
        this.producer = this.kafka.producer();
        this.consumer = this.kafka.consumer({ groupId: 'stock-group' });
    }
    async runProducer() {
        await this.producer.connect();
        console.log('Kafka Producer Connected');
    }
    async sendMessage(message) {
        await this.producer.send({
            topic: 'stock-data',
            messages: [{ value: JSON.stringify(message) }],
        });
    }
    async runConsumer() {
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
    }
}

module.exports = new Kafka();
