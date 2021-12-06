import { products } from "./product.js";
// เข้าถึง div id='products'
const divProductsEle = document.querySelector('#products') ;

//ใช้ foreach ทำการ loop product ออกมาแสดงผล
products.forEach (product => {

    // 1. create Element
// 2. create att on div or p
const divProductEle = document.createElement('div');
divProductEle.setAttribute('id',product.id);
// divProductEle.appendChild(divProductsEle);

const pProductIdEle = document.createElement('p');
pProductIdEle.textContent=product.id;
divProductEle.appendChild(pProductIdEle);

const pProductNameEle = document.createElement('p');
pProductNameEle.textContent=product.name;
divProductEle.appendChild(pProductNameEle);

const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent='price : '+ product.price + ' Bath';
divProductEle.appendChild(pProductPriceEle);

const pProductStockEle = document.createElement('p');
pProductStockEle.textContent='Remain In Stock : ' + product.RemainInstock;
divProductEle.appendChild(pProductStockEle);

// 3. add productElement to product
divProductsEle.appendChild(divProductEle);

})