import React from "react";
import Footer from "./components/Footer/Footer";
import "./style.css"; //added line
import image from "./public/images/image.jpg";

function App() {
  return (
    <div>
      <Footer />
      <img src={image} />/
    </div>
  );
}

export default App;
