import { Modal, ModalContent } from "./components";
import { useModal } from "./hooks";
import React from "react";

function App() {
  const { close, open, isOpen, ref } = useModal();

  return (
    <>
      <Modal ref={ref} isOpen={isOpen} onClose={close}>
        <ModalContent close={close} />
      </Modal>

      <button onClick={open} className="bg-amber-300 p-5 m-5">
        Open
      </button>
    </>
  );
}

export default App;
