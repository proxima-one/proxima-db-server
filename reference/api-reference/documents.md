# Documents

Once these collections we can manipulate the records of the database.

## Creating a document

#### Example

```
curl -d '{\"name\": \"Trader Orders\", \"key\": \"[240,7,194,15,208,93,108,101,114,122,7,63,117,4,203,217,41,61,53,156,192,142,26,156,54,8,0,120,135,234,214,20]\", \"value\" : \"{\"TraderAccount\":\"AccountID\",
\"BalancePedersen\":\"Balance\",}\", \"prove\": true\"}' -X POST http://0.0.0.0:80/collections/"Trader Orders"/documents/"AccountID"
```

## Updating a document

#### Example

```
curl -d '{\"name\": \"Trader Orders\", \"key\": \"[240,7,194,15,208,93,108,101,114,122,7,63,117,4,203,217,41,61,53,156,192,142,26,156,54,8,0,120,135,234,214,20]\", \"value\" : \"{\"TraderAccount\":\"AccountID\",
\"BalancePedersen\":\"Balance\",}\", \"prove\": true\"}' -X PUT http://0.0.0.0:80/collections/"Trader Orders"/documents
```

## Getting a document

#### Example

```
curl -X GET http://0.0.0.0:80/collections/"Trader Orders"/documents/"AccountID"
```

## Querying a document



#### Example

```
curl -d {name: "position_side", expression: "=", value: "-1"}}  -X POST http://0.0.0.0:80/collections/"Relayer Orders"/query
```

****
