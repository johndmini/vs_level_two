Array.prototype.myMap = function(callBack) {
    const final = [];
    for (let i = 0; i < this.length; i++){
        final.push(callBack(this[i]))
    }
    return final;
};

const utensils = ['fork', 'spoon', 'knife', 'spork']

const utensilItems = utensils.myMap(utensils => {
    return `<h1>${utensils}</h1>`
})

console.log(utensilItems)

