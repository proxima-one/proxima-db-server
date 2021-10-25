# Quick Start

{% hint style="info" %}
**Good to know:** A quick start guide can be good to help folks get up and running with your API in a few steps. Some people prefer diving in with the basics rather than meticulously reading every page of documentation!
{% endhint %}

## Get your API keys

Your API requests are authenticated using API keys. Any request that doesn't include an API key will return an error.

You can generate an API key from your Dashboard at any time.

## Connect to the Node

The best way to interact with our API is to use one of our official libraries:

{% tabs %}
{% tab title="Curl" %}
```
# Install via NPM
npm install --save my-api
```
{% endtab %}
{% endtabs %}

## Make your first request

To make your first request, send an authenticated request to the pets endpoint. This will create a `pet`, which is nice.

{% swagger src="https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json" path="/pet" method="post" %}
[https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json](https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json" path="undefined" method="undefined" %}
[https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json](https://raw.githubusercontent.com/proxima-one/proxima-db-server/master/src/docs-ui/swagger_output.json)
{% endswagger %}

{% hint style="info" %}
**Good to know:** You can use the API Method block to fully document an API method. You can also sync your API blocks with an OpenAPI file or URL to auto-populate them.
{% endhint %}

Take a look at how you might call this method using our official libraries, or via `curl`:

{% tabs %}
{% tab title="curl" %}
```
curl https://api.myapi.com/v1/pet  
    -u YOUR_API_KEY:  
    -d name='Wilson'  
    -d species='dog'  
    -d owner_id='sha7891bikojbkreuy'  
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
