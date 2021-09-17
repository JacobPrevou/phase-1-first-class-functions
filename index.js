function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    return function crab() {
        console.log('Krusty Krab')
    };
}

function returnsAnAnonymousFunction() {
    // return function () {
    //     console.log('Giblet')
    // }
    return () => {console.log('Giblet')}
}


// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_