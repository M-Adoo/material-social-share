var inlineRes = require('./inline-resources');
const PROJ_ROOT = __dirname + '../'
const DIST_ROOT = PROJ_ROOT + DIST_ROOT;

inlineRes(DIST_ROOT).then((res => {console.log(res)}))