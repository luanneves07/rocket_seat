/**
 * Comum
 */
const minhaPromiseNoES5 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('OK_FROM_ES5');
        }, 2000);
    });
};

/**
 * Arrowfunction
 */
const minhaPromise = () => new Promise( resolve => setTimeout (() => resolve('OK_FROM_ES6'), 2000) );

/**
 * Javascript
 */
minhaPromiseNoES5()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });

/**
 * ES6
 */
minhaPromise().then(response => console.log(response));

/**
 * ES8
 */
async function executaPromise() {
    try{
        console.log(await minhaPromise());
    } catch(error) {
        console.log(error);
    }
}
const executaArrowPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();
executaArrowPromise();