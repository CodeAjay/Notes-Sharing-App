import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const appName = "Sharing is Caring";
  return (
    <footer style={footerStyle} className="text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sed neque quis augue hendrerit tempor ut sed dui.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="d-flex">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; {currentYear} {appName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  padding: "40px 0",
};

export default Footer;
