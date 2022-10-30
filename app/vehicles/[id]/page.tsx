import React from "react";

const getData = async (id: string) => {
  const resp = await fetch(`https://swapi.dev/api/vehicles/${id}`);

  return resp.json();
};

const VehicleInfo = async ({ params }: any) => {
  const info = await getData(params.id);
  return (
    <div>
      <h1>Name: {info.name}</h1>
      <p>Model: {info.model}</p>
      <p>Crew: {info.crew}</p>
    </div>
  );
};

export default VehicleInfo;
