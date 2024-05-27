import "./style.css";
import ReactDOM from 'react-dom';
import App from './components/App';
var ans = ReactDOM.createRoot(document.getElementById("root"));

// ans.render("Xyz");
// var username="Admin"
// ans.render(<h1>Xyz {username}</h1>);

// var product = (
//   <>
//     <div className="col-3">
//       <h2>Price 2000</h2>
//       <button>Add to cart</button>
//     </div>
//     <div className="col-3">
//       <h2>Price 2000</h2>
//       <button>Add to cart</button>
//     </div>
//   </>
// );
// ans.render(product);
ans.render(<App></App>)
