import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SiRollsroyce } from 'react-icons/si';
import Swal from 'sweetalert2';
import SideNavBar from '../Components/SideNavBar';
import { Modal, Button } from "react-bootstrap";

const AdminChapter = () => {
  const [dataDB, setDataDB] = useState([])
  const [chapterEdit, setChapterEdit] = useState({
    _id: "",
    name: "",
    nameLong: "",
    info: "",
    colorId: "",
    facebook: "",
    instagram:"",
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


  const [modifyShow, setModifyShow] = useState(false);
  const handleCloseModify = () => setModifyShow(false);
  const handleShowModify = () => setModifyShow(true);

  const getListValues = () => {
    Axios.get(`/chapter/list`).then((result) => {
      setDataDB(result.data);
    });
  }

  useEffect(() => {
    getListValues()
  }, []);


  const [createShow, setCreateShow] = useState(false);
  const handleCloseCreate = () => setCreateShow(false);
  const handleShowCreate = () => setCreateShow(true);

  const alertCreateChapter = () => {
    Swal.fire({
        title: "¿Esta seguro que desea crear un nuevo capitulo?",
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

const createChapter = async (e) => {
  e.preventDefault();
  console.log(chapterEdit)
  const respuesta = await Axios.post("/chapter/create/", chapterEdit)
  const message = respuesta.data.mensaje;
  if (message !== "Capitulo creado") {
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


const modifyChapter = (item) => {
  Swal.fire({
      title: "¿Esta seguro que desea modificar esta este capitulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setChapterEdit({
          _id: item._id,
          name: item.name,
          nameLong: item.nameLong,
          info: item.info,
          colorId: item.colorId,
          facebook: item.facebook,
          instagram: item.instagram,
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
        Axios.get("/chapter/delete/" + id).then((resultado) => {
          // window.location.reload();
        });
        getListValues()
      }
    });
  };

  const editChapter = (e) => {
    e.preventDefault();
    Axios.put("/chapter/update/" + chapterEdit._id, chapterEdit)
      .then((respuesta) => {
        console.log(respuesta)
        const message = respuesta.data.mensaje
        if (message !== "Capitulo actualizado") {
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
        })}

        

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
    setChapterEdit({
      ...chapterEdit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SideNavBar />

      <h1>Capitulos</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur placerat felis nec gravida. Praesent ligula felis, pellentesque feugiat odio et, imperdiet iaculis risus. Proin luctus massa libero, sit amet ultricies quam rutrum vitae. Cras placerat nunc sit amet molestie ultrices. Fusce non justo a tortor euismod semper. Nam viverra nec ligula sed euismod. Mauris in ante quis odio blandit viverra. Mauris ultrices risus eget mollis fermentum. Donec a mauris lacinia erat condimentum ultrices auctor accumsan felis.</p>

      <div>
        <h3>Crear un nuevo capitulo</h3>
        <button
          className="btn btn-primary"
          onClick={(e) => alertCreateChapter()}
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
              <td>{index+1}</td>
              {/* <td>{item._id}</td> */}
              <td>{item.name}</td>
              <td>{item.nameLong}</td>				
              <td>{item.info}</td>
              <td>{item.colorId}</td>
              <td>{item.facebook}</td>
              <td>{item.instagram}</td>

              <td>
                <button className="btn btn-warning" onClick={(e) => modifyChapter(item)}>Modificar</button>
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
          show={modifyShow}
          onHide={handleCloseModify}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modificación del registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={editChapter}>
              {/* <!-- name  --> */}
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      value={chapterEdit.name}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={actualizarestado} 
                      disabled
                    ></input>
                    <label for="name">Nombre</label>
                  </div>
                </div>

                {/* nameLong
                info
                colorId
                facebook
                instagram */}
                {/* <!-- nameLong --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      value={chapterEdit.nameLong}
                      type="text"
                      className="form-control"
                      id="nameLong"
                      name="nameLong"
                      onChange={actualizarestado}
                    ></input>
                    <label for="nameLong">nameLong</label>
                  </div>
                </div>


                {/* <!-- info --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      value={chapterEdit.info}
                      type="text"
                      className="form-control"
                      id="info"
                      name="info"
                      onChange={actualizarestado}
                    ></input>
                    <label for="info">Info</label>
                  </div>
                </div>                

                {/* <!-- colorId --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      value={chapterEdit.colorId}
                      type="text"
                      className="form-control"
                      id="colorId"
                      name="colorId"
                      onChange={actualizarestado}
                      disabled
                    ></input>
                    <label for="colorId">colorId</label>
                  </div>
                </div>

                {/* <!-- facebook --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      value={chapterEdit.facebook}
                      type="text"
                      className="form-control"
                      id="facebook"
                      name="facebook"
                      onChange={actualizarestado}
                    ></input>
                    <label for="facebook">Link Facebook</label>
                  </div>
                </div>

                {/* <!-- instagram --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      value={chapterEdit.instagram}
                      type="text"
                      className="form-control"
                      id="instagram"
                      name="instagram"
                      onChange={actualizarestado}
                    ></input>
                    <label for="instagram">Link Instagram</label>
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
            <Modal.Title>Creacion de capitulo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={createChapter}>
              {/* <!-- name  --> */}
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

                {/* nameLong
                info
                colorId
                facebook
                instagram */}
                {/* <!-- nameLong --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="nameLong"
                      name="nameLong"
                      onChange={actualizarestado}
                    ></input>
                    <label for="nameLong">nameLong</label>
                  </div>
                </div>


                {/* <!-- info --> */}
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="info"
                      name="info"
                      onChange={actualizarestado}
                    ></input>
                    <label for="info">Info</label>
                  </div>
                </div>                

                {/* <!-- colorId --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="colorId"
                      name="colorId"
                      onChange={actualizarestado}
                    ></input>
                    <label for="colorId">colorId</label>
                  </div>
                </div>

                {/* <!-- facebook --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="facebook"
                      name="facebook"
                      onChange={actualizarestado}
                    ></input>
                    <label for="facebook">Link Facebook</label>
                  </div>
                </div>

                {/* <!-- instagram --> */}

                <div class="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="instagram"
                      name="instagram"
                      onChange={actualizarestado}
                    ></input>
                    <label for="instagram">Link Instagram</label>
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

export default AdminChapter