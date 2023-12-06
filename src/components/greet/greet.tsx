import { type } from "os";
import React from "react";

type GreetProps = {
  name?: string;
};

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};


// lesson 11