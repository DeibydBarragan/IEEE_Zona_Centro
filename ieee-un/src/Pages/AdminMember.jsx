import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SiRollsroyce } from 'react-icons/si';
import Swal from 'sweetalert2';
import SideNavBar from '../Components/SideNavBar';
import { Modal, Button } from "react-bootstrap";

const AdminMember = () => {
  const [dataDB, setDataDB] = useState([])
  const [memberEdit, setMemberEdit] = useState({
    _id: "",
    name: "",
    role: "",
    id: "",
    linkLinkedin: "",
    linkVarios: "",
  });

  const getTableHeaders = () => {
    let value = dataDB[0];
    let headers = [];
    for (let j in value) {
      if (!(j in headers)) {
        headers.push(j)
      }
    }
    return headers
  }
  const headerTable = getTableHeaders()


  const [modifyshow, setModifyShow] = useState(false);
  const handleCloseModify = () => setModifyShow(false);
  const handleShowModify = () => setModifyShow(true);

  const getListValues = () => {
    Axios.get(`/member/list`).then((result) => {
      setDataDB(result.data);
    });
  }

  useEffect(() => {
    getListValues()
  }, []);

  const [createShow, setCreateShow] = useState(false);
  const handleCloseCreate = () => setCreateShow(false);
  const handleShowCreate = () => setCreateShow(true);

  const alertCreateMember = () => {
    Swal.fire({
      title: "¿Esta seguro que desea crear un nuevo miembro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        handleShowCreate();
      }
    });
  };

  const createMember = async (e) => {
    e.preventDefault();
    console.log(memberEdit)
    const respuesta = await Axios.post("/member/create/", memberEdit)
    const message = respuesta.data.mensaje;
    if (message !== "El miembro a sido anexado a la base de datos") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: message,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
        confirmButtonAriaLabel: "Thumbs up, great!",
      })
    }
    else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
        confirmButtonAriaLabel: "Thumbs up, great!",
      })
    }
    getListValues();
    handleCloseCreate();
  }


  const modifyMember = (item) => {
    Swal.fire({
      title: "¿Esta seguro que desea modificar esta miembro del equipo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setMemberEdit({
          _id: item._id,
          name: item.name,
          role: item.role,
          id: item.id,
          linkLinkedin: item.linkLinkedin,
          linkVarios: item.linkVarios,
        });
        handleShowModify();
      }
    });
  };

  const deleteUser = (id) => {
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
        Axios.get("/member/delete/" + id).then((resultado) => {
          // window.location.reload();
        });
        getListValues()
      }
    });
  };

  const editMember = (e) => {
    e.preventDefault();
    Axios.put("/member/update/" + memberEdit._id, memberEdit)
      .then((respuesta) => {
        console.log(respuesta)
        const message = respuesta.data.mensaje
        if (message !== "Miembro actualizado") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: message,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
            confirmButtonAriaLabel: "Thumbs up, great!",
          })
        }
        else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: message,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
            confirmButtonAriaLabel: "Thumbs up, great!",

          }).then((result) => {
            console.log(result)
            getListValues();
            handleCloseModify();
          })
        }



        // .then((result) => {
        //   // console.log("El cambio fue modificado");
        //   /* Read more about isConfirmed, isDenied below */
        //   if (result.isConfirmed) {

        //     // Swal.fire({
        //     //   title: respuesta.data.mensaje,
        //     //   icon: "warning",
        //     //   showCancelButton: true,
        //     // });
        //   }
        // });

      });
  };

  const actualizarestado = (e) => {
    setMemberEdit({
      ...memberEdit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SideNavBar />

      <h1>Miembros</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur placerat felis nec gravida. Praesent ligula felis, pellentesque feugiat odio et, imperdiet iaculis risus. Proin luctus massa libero, sit amet ultricies quam rutrum vitae. Cras placerat nunc sit amet molestie ultrices. Fusce non justo a tortor euismod semper. Nam viverra nec ligula sed euismod. Mauris in ante quis odio blandit viverra. Mauris ultrices risus eget mollis fermentum. Donec a mauris lacinia erat condimentum ultrices auctor accumsan felis.</p>

      <div>
        <h3>Crear un nuevo usuario</h3>
        <button
          className="btn btn-primary"
          onClick={(e) => alertCreateMember()}
        >Crear</button>
      </div>

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
              <td>{index + 1}</td>
              {/* <td>{item._id}</td> */}
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.id}</td>
              <td>{item.linkLinkedin}</td>
              <td>{item.linkVarios}</td>

              <td>
                <button className="btn btn-warning" onClick={(e) => modifyMember(item)}>Modificar</button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => deleteUser(item._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <>
        <Modal
          show={modifyshow}
          onHide={handleCloseModify}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modificación del registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={editMember}>
              {/* <!-- nombre  --> */}
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      value={memberEdit.name}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={actualizarestado}
                    ></input>
                    <label for="name">Nombre</label>
                  </div>
                </div>

                {/* <!-- role --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      value={memberEdit.role}
                      type="text"
                      className="form-control"
                      id="role"
                      name="role"
                      onChange={actualizarestado}
                    ></input>
                    <label for="role">Rol</label>
                  </div>
                </div>


                {/* <!-- id --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      value={memberEdit.id}
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      onChange={actualizarestado}
                    ></input>
                    <label for="id">ID foto</label>
                  </div>
                </div>

                {/* <!-- linkLinkedin --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      value={memberEdit.linkLinkedin}
                      type="text"
                      className="form-control"
                      id="linkLinkedin"
                      name="linkLinkedin"
                      onChange={actualizarestado}
                    ></input>
                    <label for="linkLinkedin">linkLinkedin</label>
                  </div>
                </div>

                {/* <!-- linkVarios --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      value={memberEdit.linkVarios}
                      type="text"
                      className="form-control"
                      id="linkVarios"
                      name="linkVarios"
                      onChange={actualizarestado}
                    ></input>
                    <label for="linkVarios">Link Varios</label>
                  </div>
                </div>


                {/* <!-- boton  --> */}
                <h5>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Modificar
                    </button>
                  </div>
                </h5>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModify}>
              Cerrar
            </Button>
            {/* <!-- <Button variant="primary">Understood</Button>--> */}
          </Modal.Footer>
        </Modal>
      </>


      <>
        <Modal
          show={createShow}
          onHide={handleCloseCreate}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Creacion de miembro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={createMember}>
              {/* <!-- nombre  --> */}
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={actualizarestado}
                    ></input>
                    <label for="name">Nombre</label>
                  </div>
                </div>

                {/* <!-- role --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="role"
                      name="role"
                      onChange={actualizarestado}
                    ></input>
                    <label for="role">Rol</label>
                  </div>
                </div>


                {/* <!-- id --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      onChange={actualizarestado}
                    ></input>
                    <label for="id">ID foto</label>
                  </div>
                </div>

                {/* <!-- linkLinkedin --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="linkLinkedin"
                      name="linkLinkedin"
                      onChange={actualizarestado}
                    ></input>
                    <label for="linkLinkedin">linkLinkedin</label>
                  </div>
                </div>

                {/* <!-- linkVarios --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="linkVarios"
                      name="linkVarios"
                      onChange={actualizarestado}
                    ></input>
                    <label for="linkVarios">Link Varios</label>
                  </div>
                </div>


                {/* <!-- boton  --> */}
                <h5>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Crear
                    </button>
                  </div>
                </h5>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCreate}>
              Cerrar
            </Button>
            {/* <!-- <Button variant="primary">Understood</Button>--> */}
          </Modal.Footer>
        </Modal>
      </>



    </>
  )
}

export default AdminMember