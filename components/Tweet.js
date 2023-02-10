import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";

import React, { useState } from "react";

function Tweet() {
  const [tweet, setTweet] = useState("");
  const [token, setToken] = useState("");
  const [timestamp, setTimestamp] = useState(0);

  const activeUser = useSelector((state) => state.activeUser.value);

  //# Function to handle the length condition:
  const handleLength = (input) => {
    while (input.target.value.length <= 180) {
      setTweet(input.target.value);
    }
    if (input.target.value.length === 180)
      window.alert("You have reached the maximum length !");
  };

  //# Function to post the tweet data via the route:
  const sendTweet = (token, tweet, timestamp) => {
    const userData = { token, tweet, timestamp };
    fetch("https://hackatweet-back.vercel.app/tweets/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then(() => window.alert("Tweet saved !"))
      .then(() => setTweet(""));
  };

  //# Handle submit button:
  const handleSubmitBtn = () => {
    if (tweet !== "") {
      window.alert("Please enter a tweet first !");
      return;
    } else {
      setToken(activeUser.token);
      setTimestamp(new Date().getTime());
      sendTweet(token, tweet, timestamp);
    }
  };

  return (
    <>
      <div className={styles.inputBox}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="What's up ?"
          onChange={(input) => handleLength(input)}
        />
        <div className={styles.tweetBtn}>
          <p className={styles.characterCount}>{tweet.length}/280</p>
          <button
            className={styles.submitTweet}
            onClick={() => handleSubmitBtn()}
          >
            Tweet
          </button>
        </div>
      </div>
    </>
  );
}

export default Tweet;
