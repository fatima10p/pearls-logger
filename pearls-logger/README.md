A middleware that works with Pino to log your data using one line of code only! 

Install

npm i pearls-logger --save

Example

var logger = require('pearls-logger')

logger.pearlsInstance("file_name", { uniqueIdentifier: "unique_identifier" });

Result:

{
    "level":"info", 
    "timestamp":"2021-09-24T08:54:45.752Z",
    "pid":15296,
    "hostname":"LDEV-PC_NAME",
    "uniqueIdentifier":"test123",
    "msg":"This is a test log"
}

NOTE:

You have the option to provide file_name (OR a Default file will be created for you) as well as the option to provide a uniqueIdentifier.
DO NOT omit both values together. Use at least any one for best results.

