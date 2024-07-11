const {getData,getRaw} = require('./utils');

function processData(){
    return `Process:${getData()}`;

}
function processRaw(){
    return getRaw();
}
module.exports={processData,processRaw};
