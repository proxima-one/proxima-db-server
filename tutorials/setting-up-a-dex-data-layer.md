# Setting up a DEX Data Layer

{% hint style="info" %}
In order to start this tutorial you must be able to connect to a Proxima DB Node. You can set this up locally by following instructions in the getting started section.
{% endhint %}

## Setting up a Project&#x20;

Let's start by making a new project folder for a Node.js Project.&#x20;

```
mkdir dex-layer && cd dex-layer && yarn init 
```

###

### Installing Packages

```
yarn add https
```

### Index File Creation

After initializing your file create an `index.js` file with the following content to check that&#x20;

```
const https = require('http')

function checkConnection() {
let options = {
  hostname: 'localhost:80',
  port: 80,
  path: '/',
  method: 'GET'
}
const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
}

function main() {
  checkConnection()
}

main()

```

To test this out run.

```
yarn start
```

### Collections&#x20;

Next, we want to add a setup function that will initialize our collections and schema for the Decentralized Exchange. These updates will be added to the `index.js`

First, we have an add collection function.&#x20;

```
...

const insertOptions = {
  hostname: 'localhost',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

}

const relayerOrders = {
properties: {
  tx_hash: {type: "string"}, 
  trader_acc: {type: "string"},
  prover_sign: {type: "string"},
  order_program_bytes: {type: "string"},
  program_proof: {type: "string"},
  relayer_lock: {type: "string"},
  position_size: {type: "string"},
  position_side: {type: "string"},
}}



const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  
  let data = JSON.stringify(relayerOrders)
  options.path += "collections/RelayerOrders"
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

...
```



To test this out run.

```
yarn start
```

### Adding Data

```
...


const insertOptions = {
  hostname: 'localhost',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

}


const relayerOrder = {
    "id": "1",
    "trader_acc": "{\n\t\"Pk\": {\n\t\t\"Gr\": \"8AfCD9BdbGVyegc/dQTL2Sk9NZzAjhqcNggAeIfq1hQ=\",\n\t\t\"Grsk\": \"IotLv6Dgg4KoFEwhRISZmhkCI40iAQvzhSSfcU9gLxg=\"\n\t},\n\t\"Comm\": {\n\t\t\"C\": \"DmRkz19lQN9m5MhdGZPbHl+wKnnErHVomLK3r/4JNhU=\",\n\t\t\"D\": \"gmffSmIKdG8irntHCFPr9WhG32tSqoGQEDWzhizQHlc=\"\n\t}\n}",
    "prover_sign": "{\n\t\"E1\": \"prur/oGe8HbK7mLINBnR9UUsEpwzbQT/+HLEu8y8ITk=\",\n\t\"F1\": \"elCL9qyNa8d2CAysh3aFqxrkv7iOOxHj1YBbavOYMxw=\",\n\t\"F2\": \"Zopr2OLluodzzdYzu1eBS/ckdVunW4N4YnO30ACnrUQ=\",\n\t\"XBytes\": \"aalj9OFQJmx4IEMM13oXF9WRibbcdfOycdHzqoN1vw4=\",\n\t\"PHashBytes\": \"tGsiHZbxP9Rcd0muthwlSzSyoPMNOjyMJvNV1gLtdQ5x52puZaE1xYbpM1W0UyijqUQ+vaFq+GemEOhP3XMVyw==\",\n\t\"Zv\": \"9DLnRSut+fDssTaWqCIFmMg/HDgEbup1gAxOBzhD0AI=\",\n\t\"Zsk\": \"CIe936sqIG7hlRtZ7BF/9pJGkitB3c/YHp+Qd35pDQQ=\",\n\t\"Zr\": \"YIQEiOQ6TIS3zwX3u6mngJWNIEckodVMA247UUHjzg0=\"\n}",
    "order_program_bytes": "\"ACAAAABCztG8tRVF0ZRkKyYan/iI4l01FZU6lq2BF55s1iJDagYKACAAAAAk2AbSFQK1/XwvWV24WDdrro+J7vKqarLZdGPKQuYIagYKCwwPAg==\"",
    "program_proof": "\"ACYeJJVEW/PAdvgI9hcQVxrt9HHlg9xQ5upDM79K7d9SuN06IeHJt+kN7YmFTV6NCN04gKC0jkMPolYxmIrI/XcsCfxDMjjJCnV1t6CpZ1WakqnzrnnCal4uUmnChXFsLjKY1Ys7i7bzTqO1X9cxV7PqaC0pyExdaMyajzSHsUBDUKzZ0FFyBe0myUBvUGtTOUmj6PfT61OIvBpBWprtLBYOIC6D9U854fu4EMgEgt6ANubkZ68W93k08bXOdgYlNGw7x5/6xwExaJo1AQ3Xwvs80QF9Y5SVi9c8ad8ltmIyyrvS3Oe1K1y8Oe/gX9CUYb4bE6ALouBjuLB5mvKKihkEnqmYuuDbRYRdoQI8kBr1dHhZBHvUeSUZaYgjuS6pCrPy+Cnee65w2TW2HWas+HFzEEzMa3hYNQ3eie+tSaoDuDbYUNoW+sgW2fYUA3altia9W4Om80yxqpfyXVgHeQoWyDPTkrxl6AIonDEbYtPl6q01dF5t53FgY/fzMnPVNSADhpRlOKThiAGlqejn5/XHL9NLoi5onniwaCLyPC4cADqMRaAfZHC4AnFF8js90/yGszi0L4r32ZslYlmv31aUEHrgva8e2MX8Lxt1WX225ZNfH+kMgtIiRMqVwcY/DOgRvYi/m+KhQLfxHx8l0aeI7QgiLK4Ya9A0UhCAD6Efwvr3gClhCJQBo4mhQW86sNvilF0EmP+VWdQb5C9ZGR+iPYI7QWdegLgIIMEOWXgDzarIzwFZHTeoxv7X24y1N2Qa66F3HdkpAImZ1cYWRhhhwc+0Fx+WgeasJKPU7WwjWmk977r9gehFnDZCFpeMzkyJFUjttA+KVi4R+kkuvlMEhuG1BRqQrUGLvjqtm/ngVbE5o9BGSP7mnzMTZl6yelzLxGvlNjRJhwEU4/Yjwp9FHb4KzCr0crIJolVVdlNcpggc54YC4ItJ4Rh0Qmtzco0gQw6IyAge2J0qckKP9S3WhA4QFjlptgsJNgAjnorNpNjy+hIuYQp2WGj3zv94AcDrFtW9nK5NOu+57aqxzpIwBNosca27/MXIfvAS3UcJ\"",
    "relayer_lock": "{\n\t\"R\": \"OuUOaG8oy8KntNYpjyZ94DRdielpFjL0I/XbnkDd5SE=\",\n\t\"X\": \"CXAb1/ehSLSilGljQbecql9G44hf0V17v4u5u9/Y5gY=\",\n\t\"Zp\": \"d5CXyHnuaCcqU6SrifEUNppJD8F+d5XWa8wZaEu1EAk=\"\n}",
    "position_size": "288408",
    "position_side": "-1"
}


const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  
  let data = JSON.stringify(relayerOrder)
  options.path += "collections/RelayerOrders/documents/" + res.id
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()




...
```

### &#x20;

To test this out run.

```
yarn start
```

### Querying Data

Once data has been inserted&#x20;

```

...

const query = {name: "position_side", expression: "=", value: "-1"}} 

const queryOptions = {
  hostname: 'localhost',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

}


const relayerOrder = {
    "id": "1",
    "trader_acc": "{\n\t\"Pk\": {\n\t\t\"Gr\": \"8AfCD9BdbGVyegc/dQTL2Sk9NZzAjhqcNggAeIfq1hQ=\",\n\t\t\"Grsk\": \"IotLv6Dgg4KoFEwhRISZmhkCI40iAQvzhSSfcU9gLxg=\"\n\t},\n\t\"Comm\": {\n\t\t\"C\": \"DmRkz19lQN9m5MhdGZPbHl+wKnnErHVomLK3r/4JNhU=\",\n\t\t\"D\": \"gmffSmIKdG8irntHCFPr9WhG32tSqoGQEDWzhizQHlc=\"\n\t}\n}",
    "prover_sign": "{\n\t\"E1\": \"prur/oGe8HbK7mLINBnR9UUsEpwzbQT/+HLEu8y8ITk=\",\n\t\"F1\": \"elCL9qyNa8d2CAysh3aFqxrkv7iOOxHj1YBbavOYMxw=\",\n\t\"F2\": \"Zopr2OLluodzzdYzu1eBS/ckdVunW4N4YnO30ACnrUQ=\",\n\t\"XBytes\": \"aalj9OFQJmx4IEMM13oXF9WRibbcdfOycdHzqoN1vw4=\",\n\t\"PHashBytes\": \"tGsiHZbxP9Rcd0muthwlSzSyoPMNOjyMJvNV1gLtdQ5x52puZaE1xYbpM1W0UyijqUQ+vaFq+GemEOhP3XMVyw==\",\n\t\"Zv\": \"9DLnRSut+fDssTaWqCIFmMg/HDgEbup1gAxOBzhD0AI=\",\n\t\"Zsk\": \"CIe936sqIG7hlRtZ7BF/9pJGkitB3c/YHp+Qd35pDQQ=\",\n\t\"Zr\": \"YIQEiOQ6TIS3zwX3u6mngJWNIEckodVMA247UUHjzg0=\"\n}",
    "order_program_bytes": "\"ACAAAABCztG8tRVF0ZRkKyYan/iI4l01FZU6lq2BF55s1iJDagYKACAAAAAk2AbSFQK1/XwvWV24WDdrro+J7vKqarLZdGPKQuYIagYKCwwPAg==\"",
    "program_proof": "\"ACYeJJVEW/PAdvgI9hcQVxrt9HHlg9xQ5upDM79K7d9SuN06IeHJt+kN7YmFTV6NCN04gKC0jkMPolYxmIrI/XcsCfxDMjjJCnV1t6CpZ1WakqnzrnnCal4uUmnChXFsLjKY1Ys7i7bzTqO1X9cxV7PqaC0pyExdaMyajzSHsUBDUKzZ0FFyBe0myUBvUGtTOUmj6PfT61OIvBpBWprtLBYOIC6D9U854fu4EMgEgt6ANubkZ68W93k08bXOdgYlNGw7x5/6xwExaJo1AQ3Xwvs80QF9Y5SVi9c8ad8ltmIyyrvS3Oe1K1y8Oe/gX9CUYb4bE6ALouBjuLB5mvKKihkEnqmYuuDbRYRdoQI8kBr1dHhZBHvUeSUZaYgjuS6pCrPy+Cnee65w2TW2HWas+HFzEEzMa3hYNQ3eie+tSaoDuDbYUNoW+sgW2fYUA3altia9W4Om80yxqpfyXVgHeQoWyDPTkrxl6AIonDEbYtPl6q01dF5t53FgY/fzMnPVNSADhpRlOKThiAGlqejn5/XHL9NLoi5onniwaCLyPC4cADqMRaAfZHC4AnFF8js90/yGszi0L4r32ZslYlmv31aUEHrgva8e2MX8Lxt1WX225ZNfH+kMgtIiRMqVwcY/DOgRvYi/m+KhQLfxHx8l0aeI7QgiLK4Ya9A0UhCAD6Efwvr3gClhCJQBo4mhQW86sNvilF0EmP+VWdQb5C9ZGR+iPYI7QWdegLgIIMEOWXgDzarIzwFZHTeoxv7X24y1N2Qa66F3HdkpAImZ1cYWRhhhwc+0Fx+WgeasJKPU7WwjWmk977r9gehFnDZCFpeMzkyJFUjttA+KVi4R+kkuvlMEhuG1BRqQrUGLvjqtm/ngVbE5o9BGSP7mnzMTZl6yelzLxGvlNjRJhwEU4/Yjwp9FHb4KzCr0crIJolVVdlNcpggc54YC4ItJ4Rh0Qmtzco0gQw6IyAge2J0qckKP9S3WhA4QFjlptgsJNgAjnorNpNjy+hIuYQp2WGj3zv94AcDrFtW9nK5NOu+57aqxzpIwBNosca27/MXIfvAS3UcJ\"",
    "relayer_lock": "{\n\t\"R\": \"OuUOaG8oy8KntNYpjyZ94DRdielpFjL0I/XbnkDd5SE=\",\n\t\"X\": \"CXAb1/ehSLSilGljQbecql9G44hf0V17v4u5u9/Y5gY=\",\n\t\"Zp\": \"d5CXyHnuaCcqU6SrifEUNppJD8F+d5XWa8wZaEu1EAk=\"\n}",
    "position_size": "288408",
    "position_side": "-1"
}


const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  
  let data = JSON.stringify(relayerOrder)
  options.path += "collections/RelayerOrders/documents/" + res.id
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

...


```



To test this out run.

```
yarn start
```

