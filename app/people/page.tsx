import Link from 'next/link';
import React from 'react'
import styles from './page.module.css';

const getData = async () => {
  const resp = await fetch('https://swapi.dev/api/people');

  return resp.json();
}

const People = async () => {
  const { results: peopleData } = await getData();

  return (
    <div>
      <h1>
        People
      </h1>
      <ul>
        {peopleData.map((person: any) => {
          const id = person.url.split('/')[5];
          return (
            <li key={person.url}>
              <Link className={styles.people} href={`/people/${id}`}>
                Name: {person.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default People