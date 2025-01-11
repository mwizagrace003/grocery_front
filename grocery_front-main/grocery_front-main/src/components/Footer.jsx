// import React from "react";
// import "../styles/styles.css";
// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer bg ">
//         <p className="footer__text">
//           Created by{" "}
//           <a
//             href="https://www.linkedin.com/in/ishimwedivin2/"
//             target="_blank"
//             rel="noopener"
//           >
//             Ishimwe Divin
//           </a>{" "}
//           &copy; 2024 Grocery Store
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg">
      <div className="footer__container">
        <div className="footer__section">
          <h4>Contact Us</h4>
          <p>Email: gracemwiza003@gmail.com</p>
          <p>Phone: +250 788 999 888</p>
          <p>Address: St 513 KN, Kigali City, FC 12345</p>
        </div>
        <div className="footer__section">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer__section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to get the latest updates.</p>
          <form className="footer__form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/ishimwedivin2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ishimwe Mwiza Grace
          </a>{" "}
          &copy; 2024 Grocery Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
