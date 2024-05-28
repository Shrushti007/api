function Product(props) {
    function myfunction() { 
        // alert()
        props.price=9000
    }
    console.log(props)
    return (
      <div className="border p-2">
        <h2>{props.price}</h2>
        <p>{props.name}</p>
        <p>
          <button onClick={myfunction}>Add to cart</button>
        </p>
      </div>
    );
}
export default Product;