import React from "react";
import DisplayData from "./DisplayData";

const Bio = () => {
  const details = [
    {
      name: "Rudra Prakash Mallick",
      email: "rudra2022@gift.edu.in",
      password: "rudra123",
      age: 21,
    },
    {
      name: "Devashish Sethy",
      email: "devashish@gmail.com",
      password: "dev123",
      age: 20,
    },
    {
      name: "Rudra Prakash Mallick",
      email: "rudra2022@gift.edu.in",
      password: "rudra123",
      age: 21,
    },
    {
      name: "Devashish Sethy",
      email: "devashish@gmail.com",
      password: "dev123",
      age: 20,
    },
    {
      name: "Rudra Prakash Mallick",
      email: "rudra2022@gift.edu.in",
      password: "rudra123",
      age: 21,
    },
    {
      name: "Devashish Sethy",
      email: "devashish@gmail.com",
      password: "dev123",
      age: 20,
    },
  ];

  return <DisplayData data={details} />;
};

export default Bio;
