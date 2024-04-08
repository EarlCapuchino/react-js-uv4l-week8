import React from 'react';
import './App.css';
import FlightList from './FlightList';
import Header from './Header';
import Footer from './Footer';

function App() {
  const navs = ["Home", "Flights", "About"];
  const socialMedia = [
    { soc: "Facebook", url: "https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/facebook-512.png" },
    { soc: "Instagram", url: "https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/intstagram-512.png" },
    { soc: "Pinterest", url: "https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/pinterest-512.png" }
  ];

  const LocalFlights = [
    { id: 1, code: "PHL003", destination: "Davao", status: "Cancelled" },
    { id: 2, code: "PHL004", destination: "Manila", status: "Delayed" }
  ];
  
  const InternationalFlights = [
    { id: 1, code: "INT001", destination: "New York", status: "On-time" },
    { id: 2, code: "INT003", destination: "London", status: "On-time" }
  ];
  
  return (
    <div className="appContainer">
    <div className="main-content">
      <Header navs={navs} />
      <FlightList flights={LocalFlights} title="Local Flights" />
      <FlightList flights={InternationalFlights} title="International Flights" />
      <Footer socialMedia={socialMedia} />
    </div>
    </div>
  );
}

export default App;
