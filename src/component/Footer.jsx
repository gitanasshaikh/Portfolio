import React from "react";
import {
  // FaFacebook,
  FaTwitter,
  // FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <>
      <hr />
      <footer name="Footer" className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              {/* <FaFacebook size={24} /> */}

              {/* <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={34} />
              </a> */}

              {/* <FaInstagram size={24} /> */}

              <a
                href="https://linkedin.com/in/anasshaikh90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={34} />
              </a>
              {/* Mail Icon */}
              <a
                href="mailto:anasshaikh9074@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail size={34} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2024 All rights reserved.</p>
              <p className="text-sm">Anas Shaikh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
