import React from "react";
import TBody from "../components/TBody";

export const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" className="border border-gray-400 px-4 py-2 text-black">Nombres</th>
          <th scope="col" className="border border-gray-400 px-4 py-2 text-black">Correo</th>
          <th scope="col" className="border border-gray-400 px-4 py-2 text-black">ID</th>
          <th scope="col" className="border border-gray-400 px-4 py-2 text-black">Acción</th>
        </tr>
      </thead>
     <TBody/> 
    </table>
  );
};
