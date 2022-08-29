import { React, useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import '../../scss/comman.scss'

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProdects = async () => {
      setLoading(true);

      const respone = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await respone.clone().json());
        setFilter(await respone.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProdects();
  }, []);

  const FilterProduct = (cate) => {
    const updaateList = data?.filter((d) => d?.category === cate);
    setFilter(updaateList);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
          <Skeleton height={30} width={250} />
          <Skeleton height={15} width={150} />
          <Skeleton height={10} width={100} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center pb-5">
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              FilterProduct("men's clothing");
            }}
          >
            Man's Clothing
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              FilterProduct("women's clothing");
            }}
          >
            Woman's Clothing
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              FilterProduct("jewelery");
            }}
          >
            Jewellery
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              FilterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter?.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product?.id}>
                  <img
                    src={product?.image}
                    className="card-img-top"
                    alt={product?.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product?.title?.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product?.price}</p>
                    <Link
                      to={"/products/" + product?.id}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-border text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
