import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { showModal, setShowModal } = useGlobalContext();

  return (
    <>
      <main>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </main>

      <article className={`${showModal ? "show-modal" : ""}`}>
        <section className={`${showModal ? "modal" : ""}`}>
          {showModal && (
            <FaTimes
              className="close-modal"
              onClick={() => setShowModal(false)}
            />
          )}
          {showModal && <p>Modal Content</p>}
        </section>
      </article>
    </>
  );
};

export default Modal;
