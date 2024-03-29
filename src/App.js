import React from "react";
import focaccia from "./pizzas/focaccia.jpg";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Pittza(props) {
  console.log(props);
  return (
    <div>
      <img src={focaccia} alt={"focaccia"} />
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil</p>
    </div>
  );
}

function Header() {
  return (
    <div className={"header"}>
      <h1>Fast React Pittza .co</h1>
    </div>
  );
}

function Menu() {
  return (
    <>
      <div className={"menu"}>
        <h2>Our Menu</h2>
        <Pittza
          name="focaccia"
          ingredients="Bread with italian olive oil"
          photoname="focaccia"
          price="10"
        />
      </div>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  return (
    <div className={"footer"}>
      <p>{new Date().toLocaleDateString()}. We Currinety Open </p>
    </div>
  );
}
