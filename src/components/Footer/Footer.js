import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ height: "10vh", backgroundColor: "#edf2f4" }}>
      <div className="flex flex-col p-10 justify-center h-48 bg-white text-black  ">
        <div className="flex justify-center gap-5 bg-white">
          <FacebookIcon className="icons"/>
          <InstagramIcon className="icons"/>
          <TwitterIcon className="icons"/>
        </div>
        <div
          className=" flex justify-center gap-5 pt-5"
          style={{ color: "black", cursor: "pointer", fontSize: "19px" }}
        >
          <NavLink className="footerlink" to={"/stats"}>Covid Stats</NavLink>
          <NavLink className="footerlink" to={"/about-us"}>About us</NavLink> <br></br>
        </div>
        <div className="flex justify-center pt-5">
          <p style={{ color: "black", fontSize: "20px", cursor: "default" }}>
            © Covid 19 Coorporation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
