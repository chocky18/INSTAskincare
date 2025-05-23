import React from "react";
import "./TwoPanelSection.css"; // Import external stylesheet

const TwoPanelSection = () => {
  return (
    <div className="two-panel-section">
      {/* Left Panel */}
      <div className="panel left-panel">
        <img
          src="https://www.drunkelephant.com/cdn/shop/files/trunk-lid_200x200.png"
          alt="Floating Cap"
          className="floating-img top-left"
        />
        <img
          src=""
          alt="Floating Cap"
          className="floating-img bottom-right"
        />

        <h2>
          our game-changing <br />
          <span>skin philosophy</span>
        </h2>
        <p>
          Effective, biocompatible actives—without the six ingredients that can
          spell trouble. <br />
          We call them the Suspicious 6.
        </p>
        <button>LEARN MORE</button>
      </div>

     
      <div className="panel right-panel">
        <img
          src=""
          alt="Floating Cap"
          className="floating-img top-right"
        />

        <div className="right-content-box">
          <h2>meet the MVPs</h2>
          <p>
            Drunk Elephant is an ingredient-elimination philosophy for a total
            skin reset. Start here: Let our award-winning superstars lead the
            way.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default TwoPanelSection;
