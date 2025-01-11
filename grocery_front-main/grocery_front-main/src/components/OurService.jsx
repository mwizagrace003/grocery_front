// import React from "react";
// import "../styles/sty.css";
// import img1 from "../assets/img/delivery.jpg";
// import img2 from "../assets/img/online.jpg";
// import img3 from "../assets/img/fresh.jpg";
// import img4 from "../assets/img/ss.jpg";
// import img5 from "../assets/img/customer.jpg";

// const OurService = () => {
//   return (
//     <div>
//       <section id="services">
//         <h2 className="section-heading">Our Grocery Store Services</h2>
//         <p className="section-description">
//           Explore the wide range of services tailored to provide you with the
//           best shopping experience.
//         </p>
//         <ul className="services">
//           <li className="card-large" id="serv-delivery">
//             <div className="card-image">
//               <img src={img1} alt="Grocery Delivery" />
//             </div>
//             <div className="card-content">
//               <h3>Grocery Delivery</h3>
//               {/* <span className="subtitle">
//                 Bringing your essentials right to your doorstep.
//               </span> */}
//               <ul>
//                 <li>
//                   <a href="#">Same-Day Delivery</a>
//                   <span>$10</span>
//                 </li>
//                 <li>
//                   <a href="#">Next-Day Delivery</a>
//                   <span>$5</span>
//                 </li>
//                 <li>
//                   <a href="#">Bulk Orders</a>
//                   <span>$15</span>
//                 </li>
//               </ul>
//               <button className="btn-filled-dark">Order Now</button>
//             </div>
//           </li>
//           <li className="card-large" id="serv-online-order">
//             <div className="card-image">
//               <img src={img2} alt="Online Ordering" />
//             </div>
//             <div className="card-content">
//               <h3>Online Ordering</h3>
//               {/* <span className="subtitle">
//                 Shop from the comfort of your home.
//               </span> */}
//               <ul>
//                 <li>
//                   <a href="#">Mobile App Orders</a>
//                   <span>Free</span>
//                 </li>
//                 <li>
//                   <a href="#">Website Orders</a>
//                   <span>Free</span>
//                 </li>
//                 <li>
//                   <a href="#">Subscription Orders</a>
//                   <span>$20/month</span>
//                 </li>
//               </ul>
//               <button className="btn-filled-dark">Shop Now</button>
//             </div>
//           </li>
//           <li className="card-large" id="serv-fresh-produce">
//             <div className="card-image">
//               <img src={img3} alt="Fresh Produce" />
//             </div>
//             <div className="card-content">
//               <h3>Fresh Produce</h3>
//               {/* <span className="subtitle">
//                 Quality fruits and vegetables for your family.
//               </span> */}
//               <ul>
//                 <li>
//                   <a href="#">Organic Vegetables</a>
//                   <span>$30/box</span>
//                 </li>
//                 <li>
//                   <a href="#">Seasonal Fruits</a>
//                   <span>$25/box</span>
//                 </li>
//                 <li>
//                   <a href="#">Custom Produce Box</a>
//                   <span>$35/box</span>
//                 </li>
//               </ul>
//               <button className="btn-filled-dark">Shop Now</button>
//             </div>
//           </li>
//           <li className="card-large" id="serv-catering">
//             <div className="card-image">
//               <img src={img4} alt="Catering Services" />
//             </div>
//             <div className="card-content">
//               <h3>Catering Services</h3>
//               {/* <span className="subtitle">
//                 Fresh, delicious meals for your events.
//               </span> */}
//               <ul>
//                 <li>
//                   <a href="#">Corporate Events</a>
//                   <span>Contact Us</span>
//                 </li>
//                 <li>
//                   <a href="#">Private Parties</a>
//                   <span>Contact Us</span>
//                 </li>
//                 <li>
//                   <a href="#">Custom Menus</a>
//                   <span>Contact Us</span>
//                 </li>
//               </ul>
//               <button className="btn-filled-dark">Learn More</button>
//             </div>
//           </li>
//           <li className="card-large" id="serv-support">
//             <div className="card-image">
//               <img src={img5} alt="Customer Support" />
//             </div>
//             <div className="card-content">
//               <h3>Customer Support</h3>
//               <span className="subtitle">
//                 We're here to assist you 24/7.
//               </span>
//               <ul>
//                 <li>
//                   <a href="#">Live Chat</a>
//                   <span>Free</span>
//                 </li>
//                 <li>
//                   <a href="#">Phone Support</a>
//                   <span>Free</span>
//                 </li>
//                 <li>
//                   <a href="#">Email Support</a>
//                   <span>Free</span>
//                 </li>
//               </ul>
//               <button className="btn-filled-dark">Contact Us</button>
//             </div>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default OurService;


import React from "react";
import "../styles/OurService.css";
import img1 from "../assets/img/delivery.jpg";
import img2 from "../assets/img/online.jpg";
import img3 from "../assets/img/fresh.jpg";
import img4 from "../assets/img/ss.jpg";
import img5 from "../assets/img/customer.jpg";

const OurService = () => {
  return (
    <div>
      <section id="our-services">
        <h2 className="our-services-heading">Our Grocery Store Services</h2>
        <p className="our-services-description">
          Explore the wide range of services tailored to provide you with the
          best shopping experience.
        </p>
        <ul className="our-services-list">
          {/* Grocery Delivery */}
          <li className="service-card" id="service-delivery">
            <div className="service-image">
              <img src={img1} alt="Grocery Delivery" />
            </div>
            <div className="service-content">
              <h3>Grocery Delivery</h3>
              <ul className="service-details">
                <li>
                  <a href="#">Same-Day Delivery</a>
                  <span>$10</span>
                </li>
                <li>
                  <a href="#">Next-Day Delivery</a>
                  <span>$5</span>
                </li>
                <li>
                  <a href="#">Bulk Orders</a>
                  <span>$15</span>
                </li>
              </ul>
              <button className="service-button">Order Now</button>
            </div>
          </li>
          {/* Online Ordering */}
          <li className="service-card" id="service-online-order">
            <div className="service-image">
              <img src={img2} alt="Online Ordering" />
            </div>
            <div className="service-content">
              <h3>Online Ordering</h3>
              <ul className="service-details">
                <li>
                  <a href="#">Mobile App Orders</a>
                  <span>Free</span>
                </li>
                <li>
                  <a href="#">Website Orders</a>
                  <span>Free</span>
                </li>
                <li>
                  <a href="#">Subscription Orders</a>
                  <span>$20/month</span>
                </li>
              </ul>
              <button className="service-button">Shop Now</button>
            </div>
          </li>
          {/* Fresh Produce */}
          <li className="service-card" id="service-fresh-produce">
            <div className="service-image">
              <img src={img3} alt="Fresh Produce" />
            </div>
            <div className="service-content">
              <h3>Fresh Produce</h3>
              <ul className="service-details">
                <li>
                  <a href="#">Farm-to-Table</a>
                  <span>$8</span>
                </li>
                <li>
                  <a href="#">Seasonal Specials</a>
                  <span>$12</span>
                </li>
                <li>
                  <a href="#">Organic Options</a>
                  <span>$15</span>
                </li>
              </ul>
              <button className="service-button">Browse Produce</button>
            </div>
          </li>
          {/* Catering Services */}
          <li className="service-card" id="service-catering">
            <div className="service-image">
              <img src={img4} alt="Catering Services" />
            </div>
            <div className="service-content">
              <h3>Catering Services</h3>
              <ul className="service-details">
                <li>
                  <a href="#">Event Catering</a>
                  <span>$200+</span>
                </li>
                <li>
                  <a href="#">Corporate Packages</a>
                  <span>$500+</span>
                </li>
                <li>
                  <a href="#">Custom Menus</a>
                  <span>$300+</span>
                </li>
              </ul>
              <button className="service-button">Contact Us</button>
            </div>
          </li>
          {/* Customer Support */}
          <li className="service-card" id="service-customer-support">
            <div className="service-image">
              <img src={img5} alt="Customer Support" />
            </div>
            <div className="service-content">
              <h3>Customer Support</h3>
              <ul className="service-details">
                <li>
                  <a href="#">24/7 Helpline</a>
                  <span>Free</span>
                </li>
                <li>
                  <a href="#">Live Chat</a>
                  <span>Free</span>
                </li>
                <li>
                  <a href="#">Feedback & Complaints</a>
                  <span>Free</span>
                </li>
              </ul>
              <button className="service-button">Get Help</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OurService;
