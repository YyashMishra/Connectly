import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // 👈 Import the CSS file

const Home = () => {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (input.trim() !== "") {
      navigate(`/room/${input}`);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div>
       
      <nav className="navbar"> {/*Navbar component */}
        <div className="navbar-logo">Connectly</div>
      </nav>

      
      <div className="home-container">
        <div className="form-box">
          <h2>Welcome to Connectly</h2>
          <p style={{ color: '#555', marginBottom: '20px' }}>
            Start A Video Call Now !!
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button onClick={submitHandler}>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
