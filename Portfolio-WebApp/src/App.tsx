import Navbar from "./Components/Navigation/Navbar";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Future } from "./Components/Pages/Future";
import Home from "./Components/Pages/Home/Home";

const sections = [
  { id: "Shiz-Portfolio", element: <Home /> },
  { id: "About", element: <About /> },
  { id: "Future", element: <Future /> },
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
