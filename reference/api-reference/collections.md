# Collections

{% hint style="info" %}
**Good to know:** Collections are used for Proxima DB table organization.&#x20;
{% endhint %}

## Collection actions

Each model can be represented as a series of json schema, that can be added to the collection so that the data can be validated.

## Creating collections

{% swagger src="https://proxima-db.cluster.prod.proxima.one/doc/#/" path="undefined" method="undefined" %}
[https://proxima-db.cluster.prod.proxima.one/doc/#/](https://proxima-db.cluster.prod.proxima.one/doc/#/)
{% endswagger %}

#### Example

```
curl -d '{"name": "Trader Orders", schema: "{{\"properties\": \"TraderAccount\": {\"type\": \"string\"}", \"BalancePedersen\": {
\"type\": \"string\"}}'  -X POST http://0.0.0.0:80/collections
```
