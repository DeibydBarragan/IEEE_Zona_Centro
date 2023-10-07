import React from "react";
import NavbarZC from "../Components/ZonaCentro/NavbarZC";
import FooterZC from "../Components/ZonaCentro/FooterZC";
import HeroZC from "../Components/ZonaCentro/Sections/HeroZC";
import Info from "../Components/ZonaCentro/Sections/Info";
import Schedule from "../Components/ZonaCentro/Sections/Schedule";
import Guests from "../Components/ZonaCentro/Sections/Guests";
import Opinions from "../Components/ZonaCentro/Sections/Opinions";
import RegistrationForm from "../Components/ZonaCentro/Sections/RegistrationForm";
import Gallery from "../Components/ZonaCentro/Sections/Gallery";
import NextEvents from "../Components/ZonaCentro/Sections/NextEvents";
export default  function ZonaCentro() {
  return (
    <>
      <NavbarZC />
      <HeroZC />
      <Info />
      <Schedule />
      <Guests />
      <Opinions />
      <RegistrationForm />
      <Gallery />
      <NextEvents />
      <FooterZC />
    </>
  );
}