import React, { useEffect, useState } from "react";
import Card from "./Card";

function Dashboard() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Every Mounting");
  }, []);

  useEffect(() => {
    console.log("Every changing");
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Every Destroy");
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard {counter}</h1>
        <a
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Dashboard;
