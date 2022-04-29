const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapcomthis(arr, thisarg) {
    return arr.map(function(item){
        return item * this.value;
    } ,thisarg);
}

const nums = [1, 2];

console.log('this -> maçâ', mapcomthis(nums, maca));

console.log('this -> laranja', mapcomthis(nums, laranja));

