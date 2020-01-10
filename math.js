// negative case 
function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

// only for demo:
// for runing on browser, module will be skiped,
// for testing envrionment, module will be exported. 
try {
    module.exports = {
        add,
        minus,
        multi
    }
} catch (e) {}
