import { Modal, ModalContent } from "./components";
import { useModal } from "./hooks";

function App() {
  const { close, open, Modal } = useModal();

  return (
    <Modal>
      <ModalContent close={close} />
    </Modal>
  );
}

export default App;
