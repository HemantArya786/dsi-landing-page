import React from "react";
import Logo from "../assets/logo.png";
import FooterImageIcon from "../assets/GroupOfIcon.png";

function Footer() {
  return (
    <main>
      <section className="d-flex flex-wrap gap-5  justify-content-between  p-5">
        <div className="">
          <img src={Logo} alt="image not found" />
          <h4>PT Dwidasa Samsara Indonesia</h4>
          <h6 className="footer-address-text">
            Phone : +62.21.5314.1135 Fax : +62.21.5314.1135 Email :
            community@dwidasa.com Ruko Jalur Sutera 29A No. 53 Alam Sutera
            Serpong, Tangerang 15323
          </h6>
        </div>
        <div className="">
          <h4>Contact</h4>
          <div>
            <h6>Phone : +62.21.5314.1135</h6>
            <h6>Fax : +62.21.5314.1135 </h6>
            <h6>Email : community@dwidasa.com</h6>
          </div>
        </div>
        <div className=" ">
          <img
            src={FooterImageIcon}
            alt="image not found"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="bg-danger text-center py-3 ">
        <p className="m-0 p-0 text-white">
          Copyright © 2015 - Dwidasa Samsara Indonesia
        </p>
      </section>
    </main>
  );
}
export default Footer;
