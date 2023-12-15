import React from "react";
import data from "../data";
import ProductTile from "./productTile";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./productPage";
function Tiles() {
  return (
    <div className="productTileParent">
      {data.map((dataItem) => (
        <ProductTile
          key={dataItem.id}
          id={dataItem.id}
          image={dataItem.image}
          title={dataItem.title}
          description={dataItem.description}
          price={dataItem.price}
          category={dataItem.category}
        />
      ))}
    </div>
  );
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={Tiles()} />
        <Route path="/:id" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
