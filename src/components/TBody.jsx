import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Tbody = () => {
  const { usuarios, dispatch } = useContext(UserContext);

  const handleDeleteUser = (userId) => {
    dispatch({
      type: 'DELETE_USER',
      payload: userId,
    });
  };

  return (
    <tbody>
      {usuarios.map((user) => (
        <tr key={user.id}>
          <td className='border border-gray-400 px-4 py-2 text-black'>{user.nombres}</td>
          <td className='border border-gray-400 px-4 py-2 text-black'>{user.email}</td>
          <td className='border border-gray-400 px-4 py-2 text-black'>{user.id}</td>
          <td className='border border-gray-400 px-4 py-2 text-black'>
            <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => handleDeleteUser(user.id)}>X</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;