import React from "react";
import heroImage from "../../../Assets/zonaCentro/landing/hero.jpeg";
export default  function HeroZC() {
  return (
    <div className="hero-zc row align-items-center">
      <div className="d-flex flex-column col-6 ps-5 bg-primary">
        <h1 className="fw-bold text-white">
          !Te invitamos a participar en la próxima edición de la Zona Centro de IEEE!
        </h1>
        <p>
          Acompáñanos a esta reunión, organizada por la sección de la rama de la Universidad Nacional de Colombia. Donde podrás aprender cosas nuevas, participar en actividades, conocer y compartir con otros integrantes de la rama, y mucho más
        </p>
        <div className="d-flex gap-3">
          <button className="btn btn-danger">
            Inscríbete
          </button>
          <button className="btn btn-outline-danger">
            Más información
          </button>
        </div>
      </div>
      <div className="bg-black col-6">
        {/*<img src={ heroImage } alt="Evento Zona Centro" />*/}
      </div>
    </div>
  );
}