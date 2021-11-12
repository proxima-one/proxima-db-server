#!/bin/sh
echo "\n" "####Collections####"
curl http://0.0.0.0:80/collections/Relayer-Orders
# echo "\n" "Insert Collection" 
# curl -H 'Content-Type: application/json' -d '{"_id": "Relayer-Orders", "name": "Relayer-Orders", "version": "0.0.3", type: "Document", "schema": "{{\\"properties\\": \"TraderAccount\": {\"type\": \"string\"}", \"BalancePedersen\": {
# \\"type\\": \\"string\\"}}"}' -XPOST http://0.0.0.0:80/collections
echo "\n" "Get Collection"
curl -H 'Content-Type: application/json' http://0.0.0.0:80/collections/Relayer-Orders
echo "\n" "Insert" 
curl -H 'Content-Type: application/json' -d '{"key": "first", "value": {"_id": "first", "trader_acc": "Account 1", "program_proof": "Relayer Proof", "position_size": 100000, "position_side": -1}, "prove": false}' -XPOST http://0.0.0.0:80/collections/Relayer-Orders/documents
echo "\n" "Update"
curl -H 'Content-Type: application/json' -d '{"key": "first", "value": {"_id": "first", "trader_acc": "Account 1", "program_proof": "Relayer Proof", "position_size": 1000, "position_side": -1}, "prove": false}' -XPUT http://0.0.0.0:80/collections/Relayer-Orders/documents/first
echo "\n" "Find one"
curl http://0.0.0.0:80/collections/Relayer-Orders/documents/first
echo "\n" "Query"
curl -H 'Content-Type: application/json' -d '{"query": [{"name": "position_side", "expression": "<", "value": 100}], "prove": true}' -XPOST  http://0.0.0.0:80/collections/Relayer-Orders/query