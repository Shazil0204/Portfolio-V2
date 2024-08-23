import Navbar from "./Components/Navbar/Navbar";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";

const sections = [
  { id: "Home", element: <Home /> },
  { id: "About", element: <About /> },
  { id: "Contact", element: <Contact /> },
];

const App: React.FC = () => {
  return (
    <>
      <Navbar sections={sections} />
      {sections.map((section) => (
        <section key={section.id} className="full-height" id={section.id}>
          {section.element}
        </section>
      ))}
    </>
  );
};

export default App;
