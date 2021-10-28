# Quick Start

{% hint style="info" %}
**Good to know:** This is a quickstart guide to the Proxima DB Node
{% endhint %}



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

## Connect to the Node&#x20;

{% swagger src="https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json" path="/pet" method="post" %}
[https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json](https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json" path="undefined" method="undefined" %}
[https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json](https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json)
{% endswagger %}

{% hint style="info" %}
**Good to know:**You can check the connectivity to the node by going through the curl operation.
{% endhint %}

Take a look at how you might call this method using our official libraries, or via `curl`:

{% tabs %}
{% tab title="curl" %}
```
curl https://localhost:80 
```
{% endtab %}

{% tab title="Node" %}
```javascript
// require the myapi module and set it up with your API key
const myapi = require('myapi')(YOUR_API_KEY);

const newPet = away myapi.pet.create({
    name: 'Wilson',
    owner_id: 'sha7891bikojbkreuy',
    species: 'Dog',
    breed: 'Golden Retriever',
})
```
{% endtab %}

{% tab title="Python" %}
```python
// Set your API key before making the request
myapi.api_key = YOUR_API_KEY

myapi.Pet.create(
    name='Wilson',
    owner_id='sha7891bikojbkreuy',
    species='Dog',
    breed='Golden Retriever',
)
```
{% endtab %}
{% endtabs %}
