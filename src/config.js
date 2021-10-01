const path = require("path");
const fs = require("fs-extra");
const yaml = require("js-yaml");

const Empty = {};
function fromYamlFile(filePath = "./config.yaml") {
  const absPath = filePath; //path.resolve(filePath);
  console.log(absPath);
  if (!fs.existsSync(absPath)) return Empty;

  const yamlContent = fs.readFileSync(absPath, "utf8");
  return yaml.load(yamlContent.toString("utf8"));
}

interface Config {
  serialize()
  deserialize()
  validate()
}


class DatabaseConfig {
  constructor(name, config = {}) {
    this.name = name 
  }

  validate() {
    return true
  }


}

class CollectionConfig {
  constructor(databaseName, name, options = {}) {
    this.databaseName = databaseName
    this.name = name 
  }

  validate() {
    return true
  }
}


//fromYaml
//toYAML 
//output


module.exports = {
  fromYamlFile
};
