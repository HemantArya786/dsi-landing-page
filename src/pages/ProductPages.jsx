import React from "react";

function Product(props) {
  return (
    <main>
      <section className="text-start">
        <div className="d-flex justify-content-center justify-content-sm-center">
          <img src={props.image} alt="image not found" />
        </div>
        <div className="">
          <h1 className=" text-center text-sm-start">{props.title}</h1>
          <h6 className="product-description-text  text-center text-sm-start  py-3">
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application.
          </h6>
        </div>
        <div className="d-flex justify-content-center justify-content-sm-start">
          {" "}
          <button className="btn btn-danger ">Read More</button>
        </div>
      </section>
    </main>
  );
}
export default Product;
