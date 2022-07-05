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

    </>
  );
}

export default App;
