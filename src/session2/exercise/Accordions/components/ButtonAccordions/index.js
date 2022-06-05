import React from "react";
import OneAtATime from "./OneAtATime";

let listOneAtaTime = [
  {
    title: "SIMPLE PANELS",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    `,
  },
  {
    title: "TOGGLE INFORMATION",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    `,
  },
  {
    title: "NICE TOUCH",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    `,
  },
];

let oneAtatimeList = [
  {
    title: "title1",
    content: "conten1",
  },
  {
    title: "title2",
    content: "conten2",
  },
  {
    title: "title4",
    content: "conten3",
  },
];
function AccordionsButton() {
  return (
    <div>
      <OneAtATime list={oneAtatimeList} />
    </div>
  );
}

export default AccordionsButton;
