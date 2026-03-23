import React from "react";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function Stylesheet(props) {

  let className = props.primary ? "primary" : "";

  return (
    <div>

      {/* 1️⃣ Regular CSS Stylesheet */}
      <h1 className={`${className} font-xl`}>
        Stylesheet Styling
      </h1>


      {/* 2️⃣ Inline Styling */}
      {/*
      const heading = {
        fontSize: "72px",
        color: "blue"
      }

      <h1 style={heading}>Inline Styling</h1>
      */}


      {/* 3️⃣ CSS Modules */}
      {/*
      <h1 className={styles.success}>
        CSS Modules Styling
      </h1>
      */}

    </div>
  );
}

export default Stylesheet;