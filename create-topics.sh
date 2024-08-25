#!/bin/bash
cub kafka-ready -b kafka:9092 1 20

kafka-topics --create --topic test-topic --partitions 1 --replication-factor 1 --if-not-exists --bootstrap-server kafka:9092
