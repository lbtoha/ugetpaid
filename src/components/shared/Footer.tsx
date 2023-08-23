const Footer = () => {
  return (
    <div className="section-gap">
      <div className="flex flex-wrap justify-between gap-3 border-t border-C3D3C6B py-S30 font-medium max-sm:flex-col-reverse">
        <p>
          Copyright © {new Date().getFullYear()}, UGETPAID - All Right Reserved
        </p>
        <div>
          <ul className="flex items-center gap-x-5">
            <li>
              <button>Security</button>
            </li>
            <li>
              <button>Terms</button>
            </li>
            <li>
              <button>Privacy</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
