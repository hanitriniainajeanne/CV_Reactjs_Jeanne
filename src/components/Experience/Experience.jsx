import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span  style={{color: darkMode?'white':''}}>ans </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>complété </span>
        <span>Projets</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span  style={{color: darkMode?'white':''}}>entreprises </span>
        <span>Travail</span>
      </div>
    </div>
  );
};

export default Experience;
