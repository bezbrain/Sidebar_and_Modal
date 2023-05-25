import { FaBars, FaTimes } from "react-icons/fa";
import { navData } from "../data";
import { useGlobalContext } from "../context";

const SideBar = () => {
  const { showNav, setShowNav } = useGlobalContext();

  return (
    <>
      <FaBars className="open" onClick={() => setShowNav(true)} />
      <section className={`nav-sect ${showNav ? "set-nav-sect" : ""}`}>
        <header>
          <h1>Coding Addict</h1>
          <FaTimes className="close" onClick={() => setShowNav(false)} />
        </header>
        <nav>
          <ul>
            {navData.map((each) => {
              const { id, text } = each;
              return <li key={id}>{text}</li>;
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default SideBar;
