import styles from "../styles/Home.module.css";

import React, { useState, useEffect } from "react";

function Tweet() {
  const [newTweet, setNewTweet] = useState(0);

  return (
    <>
      <div className={styles.inputBox}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="What's up ?"
          onChange={(input) => setNewTweet(input.target.value.length)}
        />
        <div className={styles.tweetBtn}>
          <p className={styles.characterCount}>{newTweet}/280</p>
          <button className={styles.submitTweet}>Tweet</button>
        </div>
      </div>
    </>
  );
}

export default Tweet;
