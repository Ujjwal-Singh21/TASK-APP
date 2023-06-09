import React from "react";
import './Table.css'

const namesArr = [
  "Ujjwal",
  "Ujjwal",
  "Ujjwal",
  "Ujjwal",
  "Ujjwal",
  "Steve",
  "Steve",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
  "Akshay",
];

export const Table = () => {

  const nameObj = {};

  const flagArr = [0, 1, 2]

  const calculateCount = () => {
    namesArr.forEach(element => {
        nameObj[element] = (nameObj[element] || 0) + 1;
      });
  };

  calculateCount();

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th> NAME </th>
            <th> COUNT </th>
          </tr>
        </thead>

        <tbody>
          {
            flagArr.map(i => (
                <tr>
                    <td> {Object.keys(nameObj)[i]} </td>
                    <td 
                      style={{ backgroundColor: i == 0 ? 'yellow' : i == 1 ? 'red' : i == 2 ? 'green' : 'white'}}> 
                      {Object.values(nameObj)[i]} 
                    </td>
               </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
