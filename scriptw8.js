let greeting = 'welcome'
function outer(name){
    let family =[];
    family.unshift(name);

//closur
function inner(newMem){
    console.log(greeting)
    family.unshift(newMem);
    return family;
}
return inner;
}

// console.log(outer('bew'));
const myInner = outer('Burats')
console.log(myInner('bew'));



