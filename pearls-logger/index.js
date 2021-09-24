const pino = require('pino')
var fs = require('fs');

const options = {
    level: "info",
    timestamp: () => {
      return `, "timestamp":"${new Date().toJSON()}"`
    },
    formatters: {
        level: (label) => {
          return { level: label };
        }
      }
  }

const pinoInstance = (file_name) => {

    const dir = `./logs/`;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    const filePath = `${dir}${file_name}.log`
    return pino(options, pino.destination(filePath))
}
  
exports.pearlsInstance = (file_name, property = { uniqueIdentifier: '' }) => {

    typeof file_name !== 'object' ? file_name : file_name = "server";
    return pinoInstance(file_name).child(property)
}