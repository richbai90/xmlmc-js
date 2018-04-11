const path = require('path');
require("ts-node").register({
    project: path.resolve(__dirname, 'tests.tsconfig.json'),
});