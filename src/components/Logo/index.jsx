import React from "react";

function Logo() {
  return (
    <div>
      <h1
        style={{
          gap: "10px",
          display: "flex",
          width: "250px",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: "Raleway", fontWeight: "100" }}>Studio</span>
        <span style={{ fontWeight: "400" }}>J.Sant </span>
      </h1>
      <h6
        style={{
          fontWeight: "300",
          display: "flex",
          width: "250px",
          justifyContent: "center",
        }}
      >
        arquitetura . arte . design
      </h6>
    </div>
  );
}

export default Logo;
