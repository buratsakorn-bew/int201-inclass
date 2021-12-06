const divProductsEle = document.querySelector('#products') ;
// console.log(divProductsEle);

let products ={
    id : 'P001',
    name : 'pen',
    price : 200,
    RemainInStock : 3
}
// 1. create Element
// 2. create att on div or p
const divProductEle = document.createElement('div');
divProductEle.setAttribute('id',products.id);
// divProductEle.appendChild(divProductsEle);

const pProductIdEle = document.createElement('p');
pProductIdEle.textContent=products.id;
divProductEle.appendChild(pProductIdEle);

const pProductNameEle = document.createElement('p');
pProductNameEle.textContent=products.name;
divProductEle.appendChild(pProductNameEle);

const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent='price : '+ products.price + ' Bath';
divProductEle.appendChild(pProductPriceEle);

const pProductStockEle = document.createElement('p');
pProductStockEle.textContent='Remain In Stock : ' + products.RemainInStock;
divProductEle.appendChild(pProductStockEle);

// 3. add productElement to product
divProductsEle.appendChild(divProductEle);
