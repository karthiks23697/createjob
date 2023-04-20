import './App.css';
import { useState } from 'react';
import Modal from "react-modal";
import Card from './components/Card';
import Steps from './components/Steps';
// import Netflix from './netflix.png';



function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 577,
    },
  };
  return (
    <div className="">
      <button className="content-end block w-auto rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" onClick={setModalOpen}>Open Modal</button>
      <Card />
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)} style={customStyles}>
          <Steps />
      </Modal>
    </div>

  );
}

export default App;
