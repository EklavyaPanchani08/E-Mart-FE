import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/Action";
import Skeleton from "react-loading-skeleton";
import { Link, useParams, useSearchParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  const getProduct = async () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id]);

  // const addProduct = (product) => {
  //   dispatch(addCart(product));
  // };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row">
          <div className="col-lg-6">
            <img
              src={product?.image}
              alt={product?.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-lg-6">
            <h4 className="text-balck-50 text-upprecase mb-3">
              {product?.category}
            </h4>
            <h1 className="display-6 mb-3">{product?.title}</h1>
            <p className="lead mb-3">
              Rating {product?.rating && product?.rating.rate}
            </p>
            <h3 className="disply-6 fw-bold mb-3">$ {product?.price}</h3>
            <p className="lead mb-4">{product?.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2 mx-1 mb-3"
              // onClick={() => addProduct(product)}
            >
              Add To Cart
            </button>
            <Link to="/cart" className="btn btn-dark px-4 py-2 mx-1 mb-3">
              Go To Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
