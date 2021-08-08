const path = require("path");
const fs = require("fs-extra");
const yaml = require("js-yaml");

const Empty = {};
function fromYamlFile(filePath = "./config.yml") {
  const absPath = filePath; //path.resolve(filePath);
  console.log(absPath);
  if (!fs.existsSync(absPath)) return Empty;

  const yamlContent = fs.readFileSync(absPath, "utf8");
  console.log(yamlContent);
  return yaml.load(yamlContent.toString("utf8"));
}

module.exports = {
  fromYamlFile
};
