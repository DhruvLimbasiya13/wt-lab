import React from 'react'

function Product() {
    const Products = [ {name:'SG bat',  price: 10000}, {name:'Laptop' , price:5000} , {name:'Mouse' , price:799} , {name:'Shoes' , price:999}]
return (
    <>
    <ul>
        {Products.map((Product,index)=>{
            return(
                <>
                <li key={index}>{Product.name} for only {Product.price}</li>
                </>
            )
        })}
    </ul>
    </>
    );
}

export default function Lab_18_4() {
  return (
    <div>
      <Product/>
    </div>
  )
}
