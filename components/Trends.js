import styles from "../styles/Home.module.css";

import { useEffect, useState } from "react";

function Trends() {
  const [hashtagList, sethashtagList] = useState([]);

  useEffect(() => {
    const arr = [];
    fetch(`https://hackatweet-back.vercel.app/tweets/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        const tweets = data.tweets;
        const startsWithHashtag = /^#/;
        for (let i = 0; i < tweets.length; i++) {
          if (startsWithHashtag.test(tweets[i].tweet)) {
            arr.push(tweets[i].tweet);
          }
        }
      })
      .then(() => sethashtagList(arr));
  }, []);

  //console.log("arr:", hashtagList);

  return (
    <>
      <div className={styles.trendBox}>
        <div className={styles.trend}>
          <h2 className={styles.hashtag}>#hackatweet</h2>
          <p className={styles.tweetCount}>2 Tweets</p>
        </div>
        <div className={styles.trend}>
          <h2 className={styles.hashtag}>#hackatweet</h2>
          <p className={styles.tweetCount}>2 Tweets</p>
        </div>
      </div>
    </>
  );
}

export default Trends;
