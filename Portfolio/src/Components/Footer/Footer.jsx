const Footer = () => {
  return (
    <footer className="d-flex bg-dark flex-wrap justify-content-center align-items-center border-top text-light  p-3">
      <div
        className="col-md-4 d-flex align-items-center justify-content-center "
        style={{ width: "100%" }}
      >
        <a href="/" className="nav-link text-primary">
          {" "}
          Copyright © Javed Hussain 2024,
          <span className="mb-3 mb-md-0 text-light">
            All Rights Reserved. Unauthorized use prohibited.
          </span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
