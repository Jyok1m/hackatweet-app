import styles from "../styles/Signin.module.css";

// Antd:
import { Modal } from "antd";

// React:
import { useState } from "react";

function Signin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal button clicks:
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Return of the function:
  return (
    <div>
      <button className={styles.signin} type="primary" onClick={showModal}>
        Sign in
      </button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >

        
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default Signin;
