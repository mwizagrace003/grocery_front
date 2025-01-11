// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/loginStyles.css"; // Assuming your styles are in registerStyles.css

// const SignUpBody = () => {
//   // Initializing form state
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const [message, setMessage] = useState(""); // For displaying the registration message
//   const navigate = useNavigate();
//   // Handle form data changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Here you can handle the API call to submit the form data
//     console.log("Form Data Submitted", formData);
//     const response = await fetch("http://localhost:9090/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       // Handle HTTP errors
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response; // Parse JSON response
//     console.log(data);

//     navigate("/login");

//     // Example: You could show a success message after submission
//     setMessage("Registration successful! Please log in.");
//   };

//   return (
//     <section className="register-section">
//       <div className="register-form-container">
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Choose a Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Create a Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           {/* Role selection */}
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>
//               Select Your Role
//             </option>
//             <option value="ROLE_USER">Customer</option>
//             <option value="ROLE_SELLER">Seller</option>
//           </select>

//           <button type="submit">Register</button>
//         </form>

//         {/* Display registration message if exists */}
//         {message && <p className="registration-message">{message}</p>}

//         <p>
//           <Link to="/login">Already have an account? Log in</Link>
//         </p>
//       </div>
//       <div className="register-info-container">
//         <div className="motivational-text">
//           <h2 className="logo-name">Light of the World Furniture</h2>
//           <p className="logo-name">
//             Furniture that Shines | Furniture that Inspires
//           </p>
//         </div>
//         <div className="motivational-text">
//           <h2>Welcome Back to Your Dream Space!</h2>
//           <p>
//             Register to unlock exclusive access to our latest furniture
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

// export default SignUpBody;



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
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
        setIsRegistering(false); // Switch to login view
      } else {
        setMessage(data.message || 'Error registering');
      }

      setFormData({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        role: 'ROLE_USER',
      });
    } catch (error) {
      console.error(error);
      setMessage('');
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
      if (response.ok && data.status === 'success') {
        const { role, token } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        setMessage('Login successful!');
        if (role === 'ROLE_ADMIN') navigate('/admin');
        else if (role === 'ROLE_SELLER') navigate('/seller');
        else if (role === 'ROLE_USER') navigate('/customer');
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage(error.message || 'Error logging in');
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
              <option value="ROLE_USER">Customer</option>
              <option value="ROLE_SELLER">Seller</option>
            </select>
            <button type="submit">Sign Up</button>
            {message && <p style={{ color: 'red' }}>{message}</p>}
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
            {message && <p style={{ color: 'red' }}>{message}</p>}
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
