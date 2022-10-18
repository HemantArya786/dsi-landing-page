import React from "react";
import Logo from "../assets/logo.png";
import HomeIcon from "../assets/Union.svg";
import MailIcon from "../assets/mail.svg";
import ShuffleIcon from "../assets/shuffle.svg";
import { FiChevronDown } from "react-icons/fi";
import burgersIcon from "../assets/text_align_right.svg";

function NavBar() {
  return (
    <main className="App">
      <nav className="d-flex justify-content-between  align-items-center container p-3 ">
        <div>
          <img src={Logo} alt="not found" />
        </div>

        <div className=" gap-5 hide-mobile ">
          <h6>Serive</h6>
          <h6>Product</h6>
          <h6>Technology</h6>
          <h6>
            About
            <FiChevronDown className="ms-2" />
          </h6>
          <h6>
            Client
            <FiChevronDown className="ms-2" />
          </h6>
          <h6>Partner</h6>
        </div>
        <div className=" gap-4 hide-mobile ">
          <div>
            <img src={HomeIcon} alt="" />
          </div>
          <div>
            <img src={MailIcon} alt="" />
          </div>
          <div>
            <img src={ShuffleIcon} alt="" />
          </div>
        </div>
        <div className="visible-mobile">
          <img src={burgersIcon} alt="" />
        </div>
      </nav>
    </main>
  );
}
export default NavBar;
