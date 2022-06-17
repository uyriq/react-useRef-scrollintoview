import React, { useEffect, useState, useRef } from "react";
import "./App.css";
function App() {
  const pageRefs = useRef({});

  return (
    <div className="app">
      example from <br />
      https://stackoverflow.com/questions/64188338/scrolling-components-into-view-with-react-with-useref
      <Header pageRefs={pageRefs} />
      <About pageRefs={pageRefs} />
      <Technology pageRefs={pageRefs} />
      <Portfolio pageRefs={pageRefs} />
    </div>
  );
}

function Header({ pageRefs }) {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header>
      <button onClick={() => scrollIntoView("about")}>About</button>
      <button onClick={() => scrollIntoView("techno")}>Technology</button>
      <button onClick={() => scrollIntoView("portfolio")}>Portfolio</button>
    </header>
  );
}

function About({ pageRefs }) {
  return (
    <section
      className="page about"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
    >
      About
    </section>
  );
}

function Technology({ pageRefs }) {
  return (
    <section
      className="page techno"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, techno: el })}
    >
      Technology
    </section>
  );
}

function Portfolio({ pageRefs }) {
  return (
    <section
      className="page portfolio"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, portfolio: el })}
    >
      Portfolio
    </section>
  );
}
export default App;
