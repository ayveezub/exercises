const arr2bin = arr => arr.reduce((acc, el) => typeof el === 'number' ? acc + el : acc, 0).toString(2)
