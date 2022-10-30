import React from "react";

const getData = async (id: string) => {
  const resp = await fetch(`https://swapi.dev/api/people/${id}`);

  return resp.json();
};

const PersonInfo = async ({ params }: any) => {
  const info = await getData(params.id);
  return (
    <div>
      <h1>Name: {info.name}</h1>
      <p>Gender: {info.gender}</p>
      <p>Height: {info.height}cms</p>
    </div>
  );
};

export default PersonInfo;
