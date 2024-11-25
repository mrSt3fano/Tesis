import {Table} from "../components/Table";
import { useReducer } from "react";
import { UseForm } from "../Hooks/useForms";
import { userReducer } from "../Reducer/userReducer";
import Swal from 'sweetalert2'
import { UserContext } from "../Context/UserContext";

const initialState = {
  users: [],
};  

const RAdmin = function () {

const [formValues, handleInputChange, reset] = UseForm({
    nombres: "",
    email: "",
    id: "",
  });

  const { nombres, email, id } = formValues;
  const [state, dispatch] = useReducer(userReducer, initialState);

const onRegisterUser = (e) => {
    e.preventDefault();
    dispatch({
      type:'ADD_USER',
      payload:formValues
    })
    Swal.fire("Usuario Agregado", 'Se registró al usuario correctamente', "correcto");
    reset();
  };

    return(
      <UserContext.Provider value={
      {
        usuarios:state.users,
        dispatch
      }
    }>
      <div className="container py-5">
        <div className="flex flex-col items-start gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md mr-auto">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">REGISTRO USUARIOS</h5>
            <form onSubmit={onRegisterUser} className="space-y-4">
              <div className="form-group">
                <input
                  placeholder="Nombres"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="nombres"
                  value={nombres}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Correo"
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                  <input 
                  placeholder="ID"
                  type="number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="id"
                  value={id}
                  onChange={handleInputChange}
                  />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                REGISTRAR
              </button>
            </form>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Table />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  ); 
  
        
}

export default RAdmin;
