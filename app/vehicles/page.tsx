import React from "react";
import Navigation from "ui/Navigation";

const getData = async () => {
  const res = await fetch("https://swapi.dev/api/vehicles");
  return res.json();
};

const formatVehicleData = (results: any) => {
    return results.map((vehicle: any) => ({ title: vehicle.name, url: `vehicles/${vehicle.url.split('/')[5]}` }));
}

const Vehicles = async () => {
  const { results } = await getData();
  
  return (
    <>
      <h1>List of Vehicles</h1>
      <Navigation links={formatVehicleData(results)} />
    </>
  );
};

export default Vehicles;
