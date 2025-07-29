import React from 'react'


export default function Recieve({product , delProd,updateCount }) {
    let {id,productName,productType,price,onSale,desc,counter}=product;
  return (
    <>
      <div  className="col-md-3">
<div className="bg-light item shadow-lg p-4 position-relative rounded">
<h2>product Name:{productName}</h2>
<h2>product price:{price}</h2>
<h2>product Type:{productType}</h2>
<p>product Description :{desc}</p>
<h4>Counter:{counter}</h4>

{
    onSale && (
        <span className="badge bg-danger p-2 position-absolute top-0 end-0">
OnSale
        </span>
    )
}
<div className="d-flex justify-content-between my-3">

    <button className="btn btn-danger" onClick={()=> delProd(id)}>
Delete
    </button>
    <button className="btn btn-primary" onClick={() => updateCount(id)}>
        Update Counter
    </button>
</div>

</div>
      </div>
    </>
  )
}
