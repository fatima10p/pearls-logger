const log = require('pearls-logger');

const logger = log.pearlsInstance("test", {uniqueIdentifier: "123"});

logger.info('This is a test log')