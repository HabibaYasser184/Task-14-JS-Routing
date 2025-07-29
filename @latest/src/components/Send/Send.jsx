
import React, { useEffect, useState } from 'react'
import Recieve  from '../Recieve/Recieve';

export default function Send() {
    let prodArray=[

 {
id:1,
productName:"Samsung",
productType:"Mobile",
price:30000,
onSale:true,
desc:"good",
counter:0,

        },

        {
id:2,
productName:"LG",
productType:"Television",
price:20000,
onSale:false,
desc:"good",
counter:0,

        },
        {
id:3,
productName:"oppo",
productType:"Tablet",
price:10000,
onSale:true,
desc:"good",
counter:0,

        },
         {
id:4,
productName:"Apple",
productType:"Watch",
price:20500,
onSale:true,
desc:"good",
counter:0,

        }
    ];

    let [product,setproduct]=useState(prodArray);
    function deleteProd(prodId) {
        let newProducts=product.filter((product)=>product.id!==prodId);
        setproduct(newProducts);
    }
    function updateCounter(prodId) {
  const updatedProducts = product.map((item) =>
    item.id === prodId ? { ...item, counter: item.counter + 1 } : item
  );
  setproduct(updatedProducts);
}

  return (
    <>
       
      <div>
  
       <div className="container text-2xl bg-success p-4">
<div className="row">
{product.map((product)=>(

   < Recieve key={product.id} product={product} delProd={deleteProd}  updateCount={updateCounter}/>
)

)}
</div>
       </div>
      </div>
    </>
  )
}
