// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/loginStyles.css";
// import { useNavigate } from "react-router-dom";

// const LoginBody = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // To store error message
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!username || !password) {
//       setError("Both fields are required.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:9090/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         // Handle HTTP errors
//         if (response.status === 401) {
//           setError("Invalid username or password.");
//         } else {
//           setError("Something went wrong. Please try again later.");
//         }
//         return;
//       }

//       const data = await response.json();
//       console.log(data);

//       // Redirect based on role
//       if (data.role === "ROLE_ADMIN") navigate("/admin");
//       else if (data.role === "ROLE_CUSTOMER") navigate("/customer");
//       else if (data.role === "ROLE_SELLER") navigate("/seller");

//       // Clear error on successful login
//       setError("");
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Unable to connect to the server. Please try again later.");
//     }
//   };

//   return (
//     <section className="login-section">
//       <div className="login-form-container">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>

//           <div className="login-links">
//             <p>
//               <Link to="/register">Don't have an account? Register Here</Link>
//             </p>
//             <p>
//               <Link to="/forgot-password">Forgot Password?</Link>
//             </p>
//           </div>
//         </form>

//         {/* Display error message if exists */}
//         {error && <p className="error-message">{error}</p>}
//       </div>

//       <div className="login-info-container">
//         <div className="motivational-text">
//           <h2 className="logo-name">Light of the World Furniture</h2>
//           <p>Furniture that Shines | Furniture that Inspires</p>
//         </div>
//         <div className="motivational-text">
//           <h2>Welcome Back to Your Dream Space!</h2>
//           <p>
//             Log in to unlock exclusive access to our latest furniture
//             collections and special deals.
//           </p>
//           <p>
//             Transform your home with our unique designs and elevate your living
//             experience!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginBody;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../styles/loginStyles.css";

// const Auth = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     email: '',
//     phoneNumber: '',
//     firstName: '',
//     lastName: '',
//     role: 'ROLE_USER',
//   });

//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: '',
//   });

//   const [message, setMessage] = useState('');
//   const [isRegistering, setIsRegistering] = useState(false);

//   const handleRegisterChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLoginChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://webtechcontentbackend-production.up.railway.app/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage('Registration successful!');
//         setIsRegistering(false); // Switch to login view
//       } else {
//         setMessage(data.message || 'Error registering');
//       }

//       setFormData({
//         username: '',
//         password: '',
//         email: '',
//         phoneNumber: '',
//         firstName: '',
//         lastName: '',
//         role: 'ROLE_USER',
//       });
//     } catch (error) {
//       console.error(error);
//       setMessage('');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://webtechcontentbackend-production.up.railway.app/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       const data = await response.json();
//       if (response.ok && data.status === 'success') {
//         const { role, token } = data;
//         localStorage.setItem('token', token);
//         localStorage.setItem('role', role);

//         setMessage('Login successful!');
//         if (role === 'ROLE_ADMIN') navigate('/admin');
//         else if (role === 'ROLE_SELLER') navigate('/seller');
//         else if (role === 'ROLE_USER') navigate('/customer');
//       } else {
//         setMessage(data.message || 'Login failed');
//       }
//     } catch (error) {
//       setMessage(error.message || 'Error logging in');
//     }
//   };

//   return (
//     <div className="login-page auth-page">
//       <div className={`container ${isRegistering ? 'active' : ''}`} id="container">
//         {/* Sign Up Form */}
//         <div className="form-container sign-up">
//           <form onSubmit={handleRegister}>
//             <h1>Create Account</h1>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleRegisterChange}
//               required
//             />
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleRegisterChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleRegisterChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleRegisterChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleRegisterChange}
//               required
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleRegisterChange}
//               required
//             />
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleRegisterChange}
//               required
//             >
//               <option value="" disabled>Select Role</option>
//               <option value="ROLE_USER">Customer</option>
//               <option value="ROLE_SELLER">Seller</option>
//             </select>
//             <button type="submit">Sign Up</button>
//             {message && <p style={{ color: 'red' }}>{message}</p>}
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div className="form-container sign-in">
//           <form onSubmit={handleLogin}>
//             <h1>Sign In</h1>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={loginData.username}
//               onChange={handleLoginChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={loginData.password}
//               onChange={handleLoginChange}
//               required
//             />
//             <button type="submit">Sign In</button>
//             {message && <p style={{ color: 'red' }}>{message}</p>}
//           </form>
//         </div>

//         {/* Toggle for Sign In / Sign Up */}
//         <div className="toggle-container">
//           <div className="toggle">
//             <div className="toggle-panel toggle-left">
//               <h1>Welcome Back!</h1>
//               <p>Enter your personal details to access all site features.</p>
//               <button onClick={() => setIsRegistering(false)}>Sign In</button>
//             </div>
//             <div className="toggle-panel toggle-right">
//               <h1>Hello, Friend!</h1>
//               <p>Register to start using all our features.</p>
//               <button onClick={() => setIsRegistering(true)}>Sign Up</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/loginStyles.css";

const Auth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    role: 'ROLE_USER',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error'); // Default message type
  const [isRegistering, setIsRegistering] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);

  const validateRegistrationInputs = () => {
    const { username, password, email, phoneNumber, firstName, lastName } = formData;

    if (!username || username.length < 3) {
      setMessage("Username must be at least 3 characters.");
      setMessageType('error');
      return false;
    }
    if (!password || password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      setMessageType('error');
      return false;
    }
    if (!validateEmail(email)) {
      setMessage("Invalid email address.");
      setMessageType('error');
      return false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setMessage("Phone number must be exactly 10 digits.");
      setMessageType('error');
      return false;
    }
    if (!firstName || !lastName) {
      setMessage("First and last name are required.");
      setMessageType('error');
      return false;
    }
    return true;
  };

  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateRegistrationInputs()) return;

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setMessageType("success");
        setTimeout(() => setMessage(""), 4000); // Clear message after 4 seconds.
        setIsRegistering(false);
        setFormData({
          username: '',
          password: '',
          email: '',
          phoneNumber: '',
          firstName: '',
          lastName: '',
          role: 'ROLE_USER',
        });
      } else {
        const data = await response.json();
        setMessage(data.message || "Error registering");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Registration error. Please try again.");
      setMessageType("error");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.ok && data.status === "success") {
        const { role, token } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        setMessage("Login successful!");
        setMessageType("success");
        setTimeout(() => setMessage(""), 4000); // Clear message after 4 seconds.

        if (role === "ROLE_ADMIN") navigate("/admin");
        else if (role === "ROLE_SELLER") navigate("/seller");
        else if (role === "ROLE_USER") navigate("/customer");
      } else {
        setMessage(data.message || "Login failed");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Login error. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="login-page auth-page">
      <div className={`container ${isRegistering ? 'active' : ''}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleRegisterChange}
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleRegisterChange}
              required
            >
              <option value="" disabled>Select Role</option>
              <option value="ROLE_ADMIN">Admin</option>
              <option value="ROLE_SELLER">Seller</option>
              <option value="ROLE_USER">Customer</option>
              
            </select>
            <button type="submit">Sign Up</button>
            {message && <p className={`notification-message ${messageType}`}>{message}</p>}
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Sign In</button>
            {message && <p className={`notification-message ${messageType}`}>{message}</p>}
          </form>
        </div>

        {/* Toggle for Sign In / Sign Up */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to access all site features.</p>
              <button onClick={() => setIsRegistering(false)}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register to start using all our features.</p>
              <button onClick={() => setIsRegistering(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
