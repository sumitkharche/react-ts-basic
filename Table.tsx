import React from "react";


export default function Table(props) {
  return (
    <table>
      <tr>
        {props.children}
      </tr>
    </table>
  )
}