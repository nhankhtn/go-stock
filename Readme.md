# Cấu hình kafka

sudo apt install openjdk-11-jdk
wget https://downloads.apache.org/kafka/3.8.0/kafka_2.13-3.8.0.tgz
tar -xzf kafka_2.13-3.5.0.tgz
cd kafka_2.13-3.5.0
bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties
bin/kafka-topics.sh --create --topic test --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

# Cấu hình mongodb server

# Cài dependencies bằng npm install

# chạy dự án bằng npm build

nohup bin/zookeeper-server-start.sh config/zookeeper.properties > zookeeper.log 2>&1 &
nohup bin/kafka-server-start.sh config/server.properties > kafka.log 2>&1 &
bin/kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
bin/kafka-topics.sh --list --bootstrap-server localhost:9092
bin/kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092
