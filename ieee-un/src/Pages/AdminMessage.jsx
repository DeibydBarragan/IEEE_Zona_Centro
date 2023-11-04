import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SiRollsroyce } from 'react-icons/si';
import Swal from 'sweetalert2';
import SideNavBar from '../Components/SideNavBar';
import { Modal, Button } from "react-bootstrap";

const AdminMessage = () => {
  const [dataDB, setDataDB] = useState([])
  const [messageEdit, setMessageEdit] = useState({
    _id: "",
    fullName: "",
    mail: "",
    program: "",
    chapter: "",
    message: "",
    status:"",
    createdMessage: ""
  });

  const getTableHeaders = () => {
    let value = dataDB[0];
    let headers = [];
    for(let j in value){
      if (!(j in headers)){
        headers.push(j)
      }
    }
    return headers
  }
  const headerTable = getTableHeaders()


  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const getListValues = () => {
    Axios.get(`/message/list`).then((result) => {
      setDataDB(result.data);
    });
  }

  useEffect(() => {
    getListValues()
  }, []);

  // const modificar = (item) => {
  //   Swal.fire({
  //     title: "¿Esta seguro que desea modificar esta miembro del equipo?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Si",
  //     cancelButtonText: "No",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       setMessageEdit({
  //         _id: item._id,
  //         fullName: item.fullName,
  //         mail: item.mail,
  //         program: item.program,
  //         chapter: item.chapter,
  //         message: item.message,
  //         status: item.status,
  //       });
  //       handleShow();
  //     }
  //   });
  // };

  const deleteMessage = (id) => {
    Swal.fire({
      title: "Esta seguro que desea eliminar esta usuario del sistema?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.get("/message/delete/" + id).then((resultado) => {
          // window.location.reload();
        });
        getListValues()
      }
    });
  };

  // const editMember = (e) => {
  //   e.preventDefault();
  //   Axios.put("/message/update/" + messageEdit._id, messageEdit)
  //     .then((respuesta) => {
  //       console.log(respuesta)
  //       const message = respuesta.data.mensaje
  //       if (message !== "Capitulo actualizado") {
  //         Swal.fire({
  //           position: "center",
  //           icon: "error",
  //           title: message,
  //           showCloseButton: true,
  //           showCancelButton: false,
  //           focusConfirm: false,
  //           confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
  //           confirmButtonAriaLabel: "Thumbs up, great!",
  //         })
  //       }
  //       else {
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: message,
  //           showCloseButton: true,
  //           showCancelButton: false,
  //           focusConfirm: false,
  //           confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
  //           confirmButtonAriaLabel: "Thumbs up, great!",
            
  //       }).then((result) => {
  //         console.log(result)
  //         getListValues();
  //         handleClose();
  //       })}

        

  //         // .then((result) => {
  //         //   // console.log("El cambio fue modificado");
  //         //   /* Read more about isConfirmed, isDenied below */
  //         //   if (result.isConfirmed) {

  //         //     // Swal.fire({
  //         //     //   title: respuesta.data.mensaje,
  //         //     //   icon: "warning",
  //         //     //   showCancelButton: true,
  //         //     // });
  //         //   }
  //         // });
        
  //     });
  // };

  // const actualizarestado = (e) => {
  //   setMessageEdit({
  //     ...messageEdit,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <>
      <SideNavBar />

      <h1>Mensajes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur placerat felis nec gravida. Praesent ligula felis, pellentesque feugiat odio et, imperdiet iaculis risus. Proin luctus massa libero, sit amet ultricies quam rutrum vitae. Cras placerat nunc sit amet molestie ultrices. Fusce non justo a tortor euismod semper. Nam viverra nec ligula sed euismod. Mauris in ante quis odio blandit viverra. Mauris ultrices risus eget mollis fermentum. Donec a mauris lacinia erat condimentum ultrices auctor accumsan felis.</p>
      
      <table className="table table-responsive-md">
        <thead className="table-primary">
          <tr>
          {/* <th># REGISTRO</th> */}
              {headerTable.map((item) => <th key={item.toUpperCase()}>{item.toUpperCase()}</th>)}
            {/* <td>id</td>
            <th>NOMBRE</th>
            <th>ROL</th>
            <th>LINK LINKEDIN</th>
            <th>LINK VARIOS</th> */}
          </tr>
        </thead>
        <tbody>
          {dataDB.map((item, index) => (
            <tr>
              <td>{index+1}</td>
              {/* <td>{item._id}</td> */}
              <td>{item.fullName}</td>
              <td>{item.mail}</td>				
              <td>{item.program}</td>
              <td>{item.chapter}</td>
              <td>{item.message}</td>
              <td>{item.status}</td>
              <td>{item.createdMessage}</td>

              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => deleteMessage(item._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default AdminMessage