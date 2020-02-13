const fs = require('fs');
const es = require('event-stream');
const Utils = require ('../xtend-libs/utils');

var fileCompacter = async function () {
    var p = await Utils.execCmdExecutor ('dir' , Infinity);
    console.log('[output] = ', p);
}

fileCompacter();



