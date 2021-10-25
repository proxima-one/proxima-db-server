# Welcome!

## Welcome to Proxima DB

The authenticated data structures within this repo are integral. They feature several components:

* Authenticated Data store
* Transaction Manager
* Query Operator

When these are combined we create a powerful nosql database that can be authenticated through its merkle proof.

## Want to jump right in?

Jump in to the quick start docs and get making your first request:

{% content-ref url="quick-start.md" %}
[quick-start.md](quick-start.md)
{% endcontent-ref %}

## Running a Proxima DB Node

### Requirements

Before installing and using the Proxima DB Node it is necessary to ensure several system requirements.&#x20;

* `git  `
* `node`
* `yarn `

### Installation

```
git clone https://github.com/proxima-one/proxima-db-server
```

```
yarn install
```

### Testing

```
yarn test
```

```
yarn benchmark
```

### Starting the node&#x20;

You can run the database node as a node, or as a kubernetes package.&#x20;

{% tabs %}
{% tab title="Node" %}


```
yarn start
```
{% endtab %}

{% tab title="Docker" %}

{% endtab %}

{% tab title="Kubernetes" %}

{% endtab %}
{% endtabs %}



{% content-ref url="quick-start.md" %}
[quick-start.md](quick-start.md)
{% endcontent-ref %}

## Want to deep dive?

Dive a little deeper and start exploring our API reference to get an idea of everything that's possible with the API

{% content-ref url="reference/api-reference/" %}
[api-reference](reference/api-reference/)
{% endcontent-ref %}
