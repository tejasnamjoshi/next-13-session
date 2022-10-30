import Link from "next/link";
import React from "react";
import styles from './page.module.css';

const getData = async () => {
  const resp = await fetch("https://swapi.dev/api/vehicles");

  return resp.json();
};

const Vehicles = async () => {
  const { results: vehiclesData } = await getData();
  return (
    <div>
      <h1>Vehicles</h1>
      <ul>
        {vehiclesData.map((vehicle: { url: string; name: string }) => {
            const start = 'https://swapi.dev/api/vehicles/'.length;
            const id = vehicle.url.substring(start, vehicle.url.length - 1);
            return (
                <li key={id}>
                  <Link className={`${styles.vehicle}`} href={`/vehicles/${id}`}>{vehicle.name}</Link>
                </li>
              )
        })}
      </ul>
    </div>
  );
};

export default Vehicles;
