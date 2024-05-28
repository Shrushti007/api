import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"

function App() { 
    return (
        <>
            <Header></Header>
          <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default App