import { DeptPageTitle, DeptContainer } from "./dept-page.styles.js";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../context/categories.context";
import { useContext, useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

import React from "react";

const DeptPage = () => {
  const { department } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(categoriesMap[department]);

  useEffect(() => {
    setProducts(categoriesMap[department]);
  }, [department, categoriesMap]);

  return (
    <>
      <DeptPageTitle>{department.toUpperCase()}</DeptPageTitle>
      <DeptContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </DeptContainer>
    </>
  );
};

export default DeptPage;
