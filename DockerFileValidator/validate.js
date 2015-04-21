var validateDockerfile = require('validate-dockerfile');
var fileReader = require('./fileReader');

const FILE = 'dockerfile/Dockerfile';

var triggerValidate = function (dockerfileContent) {
    var isValid = validateDockerfile(dockerfileContent);
    console.log(isValid);
};

console.log("Starting validation of dockerfile...");
fileReader.readFile(FILE, triggerValidate);






