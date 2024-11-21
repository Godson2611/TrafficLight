import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const lightDurations = {
      red: 15 * 1000,
      green: 15 * 1000,
      yellow: 3 * 1000,
    };

    const changeLight = () => {
      setActiveLight((prevLight) => {
        if (prevLight === "red") return "green";
        if (prevLight === "green") return "yellow";
        if (prevLight === "yellow") return "red";
      });
    };

    const timeout = setTimeout(() => {
      changeLight();
    }, lightDurations[activeLight]);

    return () => clearTimeout(timeout);
  }, [activeLight]);

  return (
    <div style={styles.main_container}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.light,
            backgroundColor: activeLight === "red" ? "red" : "gray",
          }}
        />
        <div
          style={{
            ...styles.light,
            backgroundColor: activeLight === "yellow" ? "yellow" : "gray",
          }}
        />
        <div
          style={{
            ...styles.light,
            backgroundColor: activeLight === "green" ? "green" : "gray",
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "300px",
    backgroundColor: "black",
    borderRadius: "20px",
    padding: "10px",
  },
  main_container: {
    display: "flex",
    justifyContent: "center",
  },
  light: {
    width: "60px",
    height: "60px",
    margin: "10px",
    borderRadius: "50%",
    transition: "background-color 0.5s",
  },
};

export default TrafficLight;
