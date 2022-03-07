import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";
import { getProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";

function HomeScreen() {
  const dispatch = useDispatch();
  const params = useParams();
  const productList = useSelector((state: any) => state.productList);
  const { products, pages, page, loading, error } = productList;

  const { keyword, pageNumber = 1 } = params;
  useEffect(() => {
    dispatch(getProducts({ keyword, pageNumber }));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn -btn-light">
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product: any) => (
              <Col key={product._id} sm={12} md={6} lg={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {pages > 1 && (
            <Paginate page={page} pages={pages} keyword={keyword || ""} />
          )}
        </>
      )}
    </>
  );
}

export default HomeScreen;
