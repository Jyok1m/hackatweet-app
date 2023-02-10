import styles from "../styles/Home.module.css";

//# Imports:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

//# Component:
function LastTweets() {
  const [tweetList, setTweetList] = useState([]);
  const tweetStatus = useSelector((state) => state.tweets.value);

  //! Map the data:
  useEffect(() => {
    fetch("https://hackatweet-back.vercel.app/tweets/all")
      .then((response) => response.json())
      .then((data) => {
        setTweetList(data.tweets);
      });
  }, [tweetStatus]);

  tweetList.sort((a, b) => b.timestamp - a.timestamp);

  const allTweets = tweetList.map((data, i) => {
    return (
      <div className={styles.tweetContainer} key={i}>
        <div className={styles.data}>
          <img className={styles.profilePic} src="/user-logo.png" alt="" />
          <div className={styles.userData}>
            <h4>
              {data.author.firstname}{" "}
              <span style={{ color: "grey" }}>
                @{data.author.username} - {data.timestamp}
              </span>
            </h4>
          </div>
        </div>
        <div className={styles.tweetText}>
          <p className={styles.tweet}>
            {data.tweet} <span className={styles.hashtag}>#cenation</span>
          </p>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faHeart} className={styles.likeIcon} />
          <p className={styles.likeCounter}>0</p>
          <FontAwesomeIcon icon={faTrash} className={styles.likeIcon} />
        </div>
      </div>
    );
  });
  return <>{allTweets}</>;
}

export default LastTweets;
