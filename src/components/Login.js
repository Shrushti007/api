import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Login() {
    var [apidata, sendapidata] = useState([])
    
    useEffect(function () { 
        var ans = axios.get("https://fakestoreapi.com/products");
        console.log(ans)
        ans.then(function (response) {
            console.log(response);
            console.log(response.data);
            sendapidata(response.data);
        })
    },[])
  return (
    <div className="container">
          <h1>
              {/* Api Data */}
              Products
          </h1>
          <div className="row">
              {
                  apidata && apidata.length > 0 && apidata.map(value => 
                      <div className="col-3 text-center">
                          <img src={value.image} className="img-fluid"alt="" />
                          <h2>{value.price}</h2>
                          <p>{value.title}</p>
                          <button>Add to cart</button>
                      </div>
                  )
              }
          </div>
    </div>
  );
}
