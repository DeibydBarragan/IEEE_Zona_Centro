import { React, useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";

import '../Styles/LandingPage.sass';

import SideNavBar from '../Components/SideNavBar';
import Axios from 'axios';

const AdminSubPages = (props) => {
  const params = useParams();
  const actualPage = params.dashportPage;
  const [dataDB, setDataDB] = useState([])
  // const [header, setHeader] = useState()

  const getListValues = () =>{
    Axios.get(`/${actualPage}/list`).then((result) => {
      setDataDB(result.data);
    });

  }
  useEffect(() => {
    getListValues()
    getTableHeaders()
  }, []);

  console.log(actualPage)
  // console.log(header)
//   console.log(dataDB)
// console.log(dataDB.name)

  // const obj = { first: "John", last: "Doe" };
  // let encabezados = [];
  // let encabezados2 = [];

  // Object.keys(obj).forEach(function(key) {
  //   encabezados.unshift(key)
  //     console.log(key, obj[key]);
  // })
  // console.log(encabezados.reverse())

  // Object.keys(dataDB).forEach(function(key) {
  //   Object.keys(key).forEach(function(item) {
  //     encabezados2.unshift(item)
  //     console.log(item, dataDB[item]);
  //   })
  //   encabezados.unshift(key)
  //   console.log(key, dataDB[key]);
  // })
  // console.log(encabezados.reverse())

  // Object.keys(dataDB).forEach(function(key) {
  //   var value = dataDB[key];
  //   for(var j in value){
  //     var sub_key = j;
  //     var sub_val = value[j];
  //     console.log(sub_key);
  //   }
  //   // console.log(value)
  // });

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
  

  // const variable = () =>{
  //   dataDB.map((item, index) => (
  //     console.log(item[headerTable[index]])
  //     return (
  //       <tr>
  //         <td key={index.toString()}>{index}</td>
  //         <td>{item[headerTable[index]]}</td>
  //         {
  //           headerTable.map( ( itemHeaderTable, indexHeaderTable ) => (
  //             <td key={indexHeaderTable.toString()}>{item[itemHeaderTable[indexHeaderTable]]}</td>
  //           ))
  //         }
  //       </tr>
  //     )
  //   ))
  // }
  
// let contador = 0;

async function list(val){
  // var infoData = [];
  let dataSection = await val
  // console.log("console.log dataSection "+dataSection)
  for (let item of headerTable){
    // console.log("console.log item " +item)
    // console.log("console.log dataSection item " +dataSection[item])
    return <td>{dataSection[item]}</td>
    // infoData.push(<td>{dataSection[item]}</td>);
  }
  // for (let itemdataDB of val){
  //   // console.log(itemdataDB)
  //   for (let item of headerTable){
  //   // console.log(item)
  //   // console.log(itemdataDB[item])
  //     infoData.push(<td>{itemdataDB[item]}</td>);
  //   }
  // }
  // console.log(infoData)
  // return infoData
}

list()
  

  return (
    <>
      <SideNavBar />
      <div className="container">
      {/* <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>*/}
      </div> 

      <div className="container">
        <h1>{params.dashportPage}</h1>
        <table className="table">
          <thead className="table-primary">
            <tr>
              <th># REGISTRO</th>
              {headerTable.map((item) => <th key={item.toUpperCase()}>{item.toUpperCase()}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {/* {dataDB.map((itemdataDB) => {
                 return(
                   <th>{headerTable.map((item, index) => itemdataDB[item[index]]  )}</th>
                )
              })
              } */}

              {/* {dataDB.map(list)} */}
              
              <td>
                <button
                  className="btn btn-danger"

                >
                  Eliminar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                >
                  Modificar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminSubPages