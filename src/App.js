import { Modal, ModalContent } from "./components";
import { useModal } from "./hooks";

function App() {
  const { close, open, Modal } = useModal();

  return (
    <>
      <Modal>
        <ModalContent close={close} />
      </Modal>

      <button onClick={open} className="bg-amber-300 p-5 m-5">
        Open
      </button>
    </>
  );
}

export default App;
