import styles from "../styles/Home.module.css";

//# Imports:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { changeState } from "../reducers/tweets";

import toast, { Toaster } from "react-hot-toast";

//# Component:
function LastTweets(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const dispatch = useDispatch();

  //! Handle like:
  const handleLike = (button) => {
    if (isLiked) {
      button.target.style = "color: white";
      setLikeCount((likeCount -= 1));
      setIsLiked(false);
    } else {
      button.target.style = "color: red";
      setLikeCount((likeCount += 1));
      setIsLiked(true);
    }
  };

  //! Handle delete:
  const handleDelete = () => {
    fetch(`https://hackatweet-back.vercel.app/tweets/delete/${props.tweetId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => dispatch(changeState()))
      .then(() => toast("The tweet has been successfully deleted"));
  };

  return (
    <>
      <div className={styles.tweetContainer} key={props.key}>
        <div className={styles.data}>
          <img className={styles.profilePic} src="/user-logo.png" alt="" />
          <div className={styles.userData}>
            <h4>
              {props.firstname}{" "}
              <span style={{ color: "grey" }}>
                @{props.username} - {props.timestamp}
              </span>
            </h4>
          </div>
        </div>
        <div className={styles.tweetText}>
          <p className={styles.tweet}>{props.tweetText}</p>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon
            icon={faHeart}
            className={styles.likeIcon}
            onClick={(button) => handleLike(button)}
          />
          <p className={styles.likeCounter}>{likeCount}</p>
          <FontAwesomeIcon
            icon={faTrash}
            className={styles.likeIcon}
            onClick={() => handleDelete()}
          />
        </div>
      </div>
    </>
  );
}

export default LastTweets;
