"use client";

import React from "react";
import useSwr from "swr";
import Navigation from "ui/Navigation";

const getData = async () => {
  const res = await fetch("https://swapi.dev/api/people");

  return res.json();
};

const formatPeopleData = (people: any) => {
  if (!people) return [];
  const data = people.map((person: any) => ({
    title: person.name,
    url: `people/${person.url.split("/")[5]}`,
  }));

  console.log(data);
  return data;
};

const People = () => {
  const results = useSwr("people", getData);

  return (
    <div>
      <h1>List of people</h1>
      <Navigation links={formatPeopleData(results.data?.results)} />
    </div>
  );
};

export default People;
