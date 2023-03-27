import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <h3 className="heading">ABOUT</h3>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">About Us</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Press</li>
          <li className="fListItem">E-commerce Wholesale</li>
          <li className="fListItem">Corporate Information</li>
        </ul>
        <ul className="fList">
        <h3 className="heading">HELP</h3>
          <li className="fListItem">Payment</li>
          <li className="fListItem">Shipping</li>
          <li className="fListItem">Cancellation & Returns </li>
          <li className="fListItem">FAQ</li>
          <li className="fListItem">Report Infringment</li>
        </ul>
        <ul className="fList">
        <h3 className="heading">CONSUMER POLICY</h3>
          <li className="fListItem">Return Policy</li>
          <li className="fListItem">Terms of use</li>
          <li className="fListItem">Security </li>
          <li className="fListItem">Privacy </li>
          <li className="fListItem">Sitemap </li>
          <li className="fListItem">EPR Compliance </li>
        </ul>
        <ul className="fList">
        <h3 className="heading">SOCIAL</h3>
          <li className="fListItem">Facebook </li>
          <li className="fListItem">Twitter</li>
          <li className="fListItem">Youtube </li>
        </ul>
        
      </div>
      <div className="fText">Copyright © 2023 e-commerce.com.</div>
    </div>
  );
};

export {Footer};