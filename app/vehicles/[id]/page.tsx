import React from 'react'

const getData = async (id: string) => {
  const res = await fetch(`https://swapi.dev/api/vehicles/${id}`);

  return res.json();
};

const Vehicle = async ({ params, searchParams }: any) => {
  const id = params.id;
  const vehicle = await getData(id);

  if(searchParams.error) throw new Error('Forced error');
  
  return (  
    <div>
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Crew: {vehicle.crew}</p>
    </div>
  )
}

export default Vehicle