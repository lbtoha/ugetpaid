import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="section-gap">
      <div className="flex justify-between py-S30 border-t border-C3D3C6B font-medium">
        <p>Copyright © 2022, UGETPAID - All Right Reserved</p>
        <div>
          <ul className="flex items-center justify-between gap-x-5">
            <li>
              <Link href="/">Security</Link>
            </li>
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
