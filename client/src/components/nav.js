import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../index.css';

const Navi = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [showMenu, setShowMenu] = useState(false);
  const appName = "Sharing is Caring";
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn", 'false');
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    setLoggedIn(localStorage.isLoggedIn);
    if (isAuthenticated) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.setItem('isLoggedIn', 'false');
    }
  }, [isAuthenticated]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="./logo.png" alt="Logo" />
          <span>{appName}</span>
        </div>
        <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
            <Link to="/">Home</Link> {/* Use Link instead of anchor tag */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Use Link instead of anchor tag */}
          </li>
          <li>
            <Link to="/notes">Notes</Link> {/* Use Link instead of anchor tag */}
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link> {/* Use Link instead of anchor tag */}
          </li>

          {loggedIn === 'true' ? 
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
            :
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navi;



// // NavigationBar.js

// import React, { useState,useEffect } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import '../index.css';


// const Navi = () => {
//   const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
//   const [showMenu, setShowMenu] = useState(false);
//   const appName = "Sharing is Caring";
//   const [loggedIn, setLoggedIn] = useState();
//   const handleLogout = ()=>{

//     localStorage.removeItem("isLoggedIn",'false');
//     logout({returnto:window.location.origin })
//   }
//   useEffect(() => {
//     setLoggedIn(localStorage.isLoggedIn);
//     if (isAuthenticated) {
//       localStorage.setItem('isLoggedIn', 'ture');
//     } else{
//       localStorage.setItem('isLoggedIn','false');
//     }
//   }, [isAuthenticated]);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <div className="container">
//     <nav className="navbar">
//             <div className="logo">
//                 <img src="./logo.png" alt="Logo" />
//                 <span>{appName}</span>
//             </div>
//             <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
//                 ☰
//             </div>
//             <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
//                 <li>
//                 <a href="/">Home</a>
//                 </li>
//                 <li>
//                 <a href="/about">About</a>
//                 </li>
//                 <li>
//                 <a href="/notes">Notes</a>
//                 </li>
//                 <li>
//                 <a href="/dashboard">Dashboard</a>
//                 </li>
                
//                 {loggedIn === 'true' ? 
//                     <li>
//                       <button onClick={handleLogout}>Log Out</button>
//                     </li>
//                    : 
//                     <li>
//                       <button onClick={() => loginWithRedirect()}>Log In</button>
//                     </li>
//                   }


//             </ul>
//     </nav>
//         </div>
//   );
// };

// export default Navi;
