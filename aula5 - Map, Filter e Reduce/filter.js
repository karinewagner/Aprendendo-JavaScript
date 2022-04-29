{
    function filtrapares(arr) {
        return arr.filter(callback);
    }

    function callback(item) {
        return item % 2 === 0;
    }  
}
{
    function filtraimpares(arr) {
        return arr.filter(callback);
    }

    function callback(item) {
        return item % 2 !== 0;
    }
}

const meuarray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtrapares(meuarray));

console.log(filtraimpares(meuarray));