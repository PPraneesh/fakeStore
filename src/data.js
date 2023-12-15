const apiURL ="https://fakestoreapi.com/products"
const response = await fetch(apiURL)
const data = await response.json(); 

export default data;