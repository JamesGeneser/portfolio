// import React from "react";

// import { useLocation, useNavigate } from "react-router-dom";
// import { gsap } from "gsap";

// function animateIcons() {
//   //   let icon = document.querySelector(".icon");
//   gsap.from(".icon", { x: 1000, opacity: 0, duration: 3 });

//   //   setTimeout(() => {}, "3000");
// }
// animateIcons();
// function Footer() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   return (
//     <footer className="footer w-100 mt-auto p-4">
//       <div className="container text-center mb-5"></div>
//       {location.pathname !== "/" && (
//         <button className="btn  mb-3" onClick={() => navigate(-1)}>
//           &larr; Back to Home
//         </button>
//       )}
//       <div className="iconContainer d-flex justify-content-between">
//         <img className="icon" src={require("../images/twitterIcon.png")} />
//         <img className="icon" src={require("../images/instagramIcon.png")} />

//         <img className="icon" src={require("../images/facebookIcon.png")} />
//       </div>
//     </footer>
//   );
// }

// export default Footer;
