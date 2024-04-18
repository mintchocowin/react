import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, setQuery] = useSearchParams();
  console.log(query.get("category"));
  return <div>Product All</div>;
};

export default Product;

import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, setQuery] = useSearchParams();
  console.log(query.get("category"));
  return <div>Product All</div>;
};
