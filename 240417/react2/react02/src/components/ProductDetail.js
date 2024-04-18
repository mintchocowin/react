import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getProductDetail = async () => {
    const url = `http://localhost:3004/products/${id}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
    setLoading(False);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product == null) {
    return <h1>Data Loading...</h1>;
  } else {
    return (
      <Container>
        <Row>
          <Col className="product-detail-img">
            <img src="{product?.img}" alt="imgInfo" />
          </Col>
          <Col>
            <div className="product-info">{product?.title}</div>
            <div className="product-info">{product?.price}</div>
            <div classNAme="choice"></div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ProductDetail;
