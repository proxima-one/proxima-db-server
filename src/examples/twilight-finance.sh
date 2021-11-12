#!/bin/sh
URL=$1
URL=${URL:="http://0.0.0.0:80"}
echo "Connecting to:" $URL
echo "\n" "####Collections####"
echo "\n" "Insert Collection" 
#"schema": "{\"properties\": { \"_id\": {\"type\": \"string\"}, \"position_side\": {\"type\": \"number\"}, \"position_size\": {
#\"type\": \"number\"}, \"trader_acc\": {\"type\": \"string\"}, \"program_proof\": {\"type\": \"string\"} }
curl -H 'Content-Type: application/json' -d '{"_id": "Relayer-Orders", "name": "Relayer-Orders", "version": "0.0.3", "type": "Document", "schema": "{\"properties\": {\"_id\": {\"type\": \"string\"}, \"trader_acc\": {\"type\": \"string\"}, \"program_proof\": {\"type\": \"string\"}, \"position_size\": {\"type\": \"number\"},\"position_side\": {\"type\": \"number\"} }}"}' -XPOST $URL/collections
echo "\n" "Get Collection"
curl -H 'Content-Type: application/json' $URL/collections/Relayer-Orders
echo "\n" "Insert" 
curl -H 'Content-Type: application/json' -d '{"key": "first", "value": {"_id": "first", "trader_acc": "Account 1", "program_proof": "Relayer Proof", "position_size": 100000, "position_side": -1}, "prove": false}' -XPOST $URL/collections/Relayer-Orders/documents
echo "\n" "Update"
curl -H 'Content-Type: application/json' -d '{"key": "first", "value": {"_id": "first", "trader_acc": "Account 1", "program_proof": "Relayer Proof", "position_size": 1000, "position_side": -1}, "prove": false}' -XPUT $URL/collections/Relayer-Orders/documents/first
echo "\n" "Find one"
curl $URL/collections/Relayer-Orders/documents/first
echo "\n" "Query"
curl -H 'Content-Type: application/json' -d '{"query": [{"name": "position_side", "expression": "<", "value": 100}], "prove": true}' -XPOST  $URL/collections/Relayer-Orders/query