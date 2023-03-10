import styles from "../styles/Signup.module.css";

//# Imports:
import { Modal } from "antd";

import { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { login } from "../reducers/activeUser";

import toast, { Toaster } from "react-hot-toast";

//# Component:
function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //! Set fields upon input:
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //! Modal button clicks:
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const router = useRouter();

  //! Setup the signup functional fetch:
  const signup = async () => {
    const userData = { firstname, username, password };
    const response = await fetch(
      "https://hackatweet-back.vercel.app/users/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    if (data.result) {
      dispatch(login({ username, token: data.token }));
      router.push("/home"); //? Redirects to the home page
    } else {
      toast(data.error);
    }
  };

  //! Return of the function:
  return (
    <div>
      <button className={styles.signup} type="primary" onClick={showModal}>
        Sign up
      </button>
      <Modal
        open={isModalOpen}
        className={styles.modal}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.header}>
          <img
            src="/twitter-black.png"
            alt="Black Twitter logo"
            className={styles.miniLogo}
          />
          <h1>Create your Hackatweet account</h1>
        </div>
        <div className={styles.inputForm}>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="First Name"
            onInput={(input) => setFirstname(input.target.value)}
          />
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Username"
            onInput={(input) => setUsername(input.target.value)}
          />
          <input
            className={styles.inputBox}
            type="password"
            placeholder="Password"
            onInput={(input) => setPassword(input.target.value)}
          />
          <button className={styles.submitBtn} onClick={() => signup()}>
            Sign up
          </button>
          <Toaster></Toaster>
        </div>
      </Modal>
    </div>
  );
}

export default Signup;
