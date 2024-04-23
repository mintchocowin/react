import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="productcard" onClick={showDetail}>
      <img src={item?.img} alt="imginfo" />
      <div>Concious Choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new === true ? "신상품" : ""}</div>
    </div>
  );
};
