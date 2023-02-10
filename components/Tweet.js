import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";

import React, { useState, useEffect } from "react";

import { changeState } from "../reducers/tweets";

import toast, { Toaster } from "react-hot-toast";

function Tweet() {
  const [tweet, setTweet] = useState("");
  const [token, setToken] = useState("");
  const [timestamp, setTimestamp] = useState(0);

  const activeUser = useSelector((state) => state.activeUser.value);
  const tweetStatus = useSelector((state) => state.tweets.value);

  const dispatch = useDispatch();

  useEffect(() => {
    setToken(activeUser.token);
    setTimestamp(new Date().getTime());
  }, [tweetStatus]);

  //# Handle submit button:
  const handleSubmitBtn = () => {
    if (tweet === "") {
      toast("Please enter a tweet first !");
      return;
    } else {
      const userData = { token, tweet, timestamp };
      fetch("https://hackatweet-back.vercel.app/tweets/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then(() => dispatch(changeState()))
        .then(() => toast("Tweet saved !"))
        .then(() => setTweet(""));
    }
  };

  //todo: Faire la condition de limite de tweet !
  //todo: Empty le input field on submit

  return (
    <>
      <div className={styles.inputBox}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="What's up ?"
          onChange={(input) => setTweet(input.target.value)}
        />
        <div className={styles.tweetBtn}>
          <p className={styles.characterCount}>{tweet.length}/280</p>
          <button
            className={styles.submitTweet}
            onClick={() => handleSubmitBtn()}
          >
            Tweet
          </button>
          <Toaster></Toaster>
        </div>
      </div>
    </>
  );
}

export default Tweet;
