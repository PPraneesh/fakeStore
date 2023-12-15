import React , {useState} from "react";
import data from "../data";
import {Link, useNavigate} from "react-router-dom"

function Header(){
    const [search,setSearch] = useState("");

    const navigate = useNavigate()
    function inputHandler(event){
        const {value}=event.target;
        setSearch(value);
    }
    function searchHandler(){
        const product = data.find((dataItem) => {
            return dataItem.title === (search);
          });
          console.log(product);
          navigate(`/${product.id}`)
        
    }
    return <div className="header">
    <div className="titleSearch">
    <Link className="link" to="/">
        <h2>Fake Store</h2>
    </Link>
        <div>
        <input name="search" placeholder="Search anything" onChange={inputHandler} />
        <button onClick={searchHandler}><span class="material-symbols-outlined icon">
search
</span></button>
        </div>
        <h2>Home</h2>
        <h2>Cart</h2>
        <h2>Fav</h2>
    </div>
        <div>

        </div>
    </div>
}
export default Header;