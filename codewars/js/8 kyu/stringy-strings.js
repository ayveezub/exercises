const stringy = size => [...Array(size)].reduce((acc, _, i) => acc + (i % 2 ^ 1), '')
