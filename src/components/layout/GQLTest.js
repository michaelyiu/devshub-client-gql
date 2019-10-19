import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const HELLO = gql`
  {
    hello
  }
`;

const GQLTest = () => {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>{data.hello}</div>;
};

export default GQLTest;
