import { Modal, ModalWrapper } from "./components";
import { useModal } from "./hooks";
import React from "react";

function App() {
  const { close, open, isOpen, ref } = useModal();

  return (
    <>
      <ModalWrapper ref={ref} isOpen={isOpen} onClose={close}>
        <Modal close={close} />
      </ModalWrapper>

      <button onClick={open} className="bg-amber-300 p-5 m-5">
        Open
      </button>
    </>
  );
}

export default App;
