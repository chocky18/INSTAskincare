import React from "react";
import "./FounderQuote.css"; // Import the external CSS

const FounderQuote = () => {
  return (
    <div className="founder-container">
      <h3 className="founder-heading">OUR FOUNDER</h3>

      <p className="founder-text">
        "When I created <span className="bold">Drunk Elephant</span>, I isolated the most effective ingredients that directly benefit the health of skin.
      </p>

      <p className="founder-text">
        Now I think of Drunk Elephant as an ingredient-elimination philosophy for a <span className="bold">total skin reset</span>."
      </p>

      <div className="founder-signature">
        <p className="signature-text">xo, Tiffany</p>
        <p className="founder-name">TIFFANY MASTERSON</p>
      </div>
    </div>
  );
};

export default FounderQuote;
