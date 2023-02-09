import styles from "../styles/Home.module.css";

//# Imports:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//# Component:
function LastTweets() {
  return (
    <>
      <div className={styles.tweetContainer}>
        <div className={styles.data}>
          <img className={styles.profilePic} src="/user-logo.png" alt="" />
          <div className={styles.userData}>
            <h4>
              John{" "}
              <span style={{ color: "grey" }}>
                @JohnCena - a few seconds ago
              </span>
            </h4>
          </div>
        </div>
        <div className={styles.tweetText}>
          <p className={styles.tweet}>
            You can't see me ! <span className={styles.hashtag}>#cenation</span>
          </p>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faHeart} className={styles.likeIcon} />
          <p className={styles.likeCounter}>0</p>
          <FontAwesomeIcon icon={faTrash} className={styles.likeIcon} />
        </div>
      </div>
    </>
  );
}

export default LastTweets;
