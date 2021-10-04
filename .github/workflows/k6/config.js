const path = require("path");
const fs = require("fs-extra");
const yaml = require("js-yaml");

const Empty = {};
function fromYamlFile(filePath = "./load-testing-config.yaml") {
  const absPath = filePath; //path.resolve(filePath);
  console.log(absPath);
  if (!fs.existsSync(absPath)) return Empty;

  const yamlContent = fs.readFileSync(absPath, "utf8");
  return yaml.load(yamlContent.toString("utf8"));
}


function validateConfig(rawConfig) {
    return rawConfig
}

const DEFAULT_CONFIG = {
    type: "STRESS",
    tables: 1,
    duration: "5m",
    operations: {
        range: 0.1,
        put: 0.1,
        update: 0.1, 
        get: 0.3,
        delete: 0.1
    },
    collection_type: "stream",
    update_type: "Commit",
    proofs: 0.1,
    location: {
        ip: "0.0.0.0",
        port: "80"
    },
}

module.exports = {
  fromYamlFile,
  DEFAULT_CONFIG
};
