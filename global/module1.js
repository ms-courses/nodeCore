//Private variable to the module1
var name = "Node tutorial";

console.log('Load module', module.id, module.filename);
console.log('module.parent', module.parent);
console.log('module.children', module.children);


//function getName is exported.
exports.getName = function (r) {
    return name;
};

console.log(exports===module.exports);


