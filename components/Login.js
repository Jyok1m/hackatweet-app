// CSS:
import styles from "../styles/Login.module.css";

// Modules:
import Signin from "./SignIn";
import Signup from "./SignUp";

function Login() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <img
            src="/twitter-white.png"
            alt="White large Twitter logo"
            className={styles.bigLogo}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <img
              src="/twitter-white.png"
              alt="White Twitter logo"
              className={styles.miniLogo}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>See what's happening</h1>
            <br />
            <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
            <div className={styles.connectionBtns}>
              <Signup />
              <p className={styles.text}>Already have an account ?</p>
              <Signin />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
