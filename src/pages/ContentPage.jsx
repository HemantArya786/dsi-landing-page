import React from "react";
import ProductPages from "./ProductPages";
import HeroImage from "../assets/hero-image-1.png";
import SectionImage from "../assets/section-image-1.png";
import ProductImageOne from "../assets/product-image-one.png";
import ProductImagetwo from "../assets/product-image-two.png";
import ProductImagethree from "../assets/product-image-three.png";

function Content() {
  return (
    <main>
      <section className="d-flex flex-sm-row flex-column gap-5 align-items-center p-5">
        <div className="col-sm-6 order-1 order-sm-0">
          <h1 className="fw-bold text-center text-sm-start">
            Making the most of the <br /> ever-growing
          </h1>
          <h2 className="text-theme fw-bold text-center text-sm-start">
            Information Technology
          </h2>
          <h6 className=" py-3 section-description-text width-90 text-center text-sm-start ">
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </h6>
          <div className="d-flex justify-content-center justify-content-sm-start">
            <button className="btn btn-danger text-center text-sm-start">
              Read More
            </button>
          </div>
        </div>
        <div className="col-sm-6 order-0 order-sm-1 ">
          <img src={HeroImage} alt="not found" className="img-fluid" />
        </div>
      </section>
      <section className="d-flex flex-sm-row flex-column gap-5 align-items-center p-5 section-two">
        <div className="col-sm-6">
          <img src={SectionImage} alt="not found" className="img-fluid" />
        </div>
        <div className="col-sm-6 ">
          <h1 className="text-center text-sm-start">
            Welcome to&nbsp;
            <span className="text-theme">Dwidasa Samsara Indonesia (DSI)</span>
          </h1>
          <h6 className="py-3 section-description-text width-90 text-center text-sm-start ">
            Dwidasa Samsara Indonesia was firstly established in 2010 by the
            founders, who each of them has a common end objective to innovate
            new creations by making the most of the ever-growing information
            technology through <span className="text-theme">DSI</span>’s
            distinct front-end based application concept.
          </h6>
          <h6 className=" py-3 text-center text-sm-start section-description-text width-90 ">
            Managed by a team of professional experts with extensive experience
            and impressive track records,<span className="text-theme">DSI</span>{" "}
            believes that continuous improvements and innovations assure your
            business to run effectively and efficiently.
          </h6>
        </div>
      </section>
      <section className="text-center py-5">
        <h1 className="pt-5">Product and Service</h1>
        <div className="d-flex flex-column flex-sm-row gap-5 p-5">
          <ProductPages title="Our Product" image={ProductImageOne} />
          <ProductPages title="Our Service" image={ProductImagetwo} />
          <ProductPages title="Our Technology" image={ProductImagethree} />
        </div>
      </section>
    </main>
  );
}
export default Content;
