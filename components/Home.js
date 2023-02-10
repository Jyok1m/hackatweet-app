import styles from "../styles/Home.module.css";

//# Imports:
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../reducers/activeUser";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";

const moment = require("moment");

//# Component:
function Home() {
  const router = useRouter();

  //! Fetch the user name + the name:
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const activeUser = useSelector((state) => state.activeUser.value);

  useEffect(() => {
    if (!activeUser.token) {
      router.push("/"); //? Redirects to the landing page
    } else {
      const { token } = activeUser;
      fetch(`https://hackatweet-back.vercel.app/users/${token}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFirstname(data.user.firstname);
          setUsername(data.user.username);
        });
    }
  }, []);

  //! Handle logout:
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/"); //? Redirects to the landing page
  };

  //! Handle the fetch + props:

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

  //! Sort the tweetlist:
  tweetList.sort((a, b) => b.timestamp - a.timestamp);

  //! Display the text:
  function displayText(str) {
    const words = str.split(" ");
    let newStr = [];
    const startsWithHashtag = /^#/;
    for (let i = 0; i < words.length; i++) {
      console.log("words[i]", words[i]);
      if (startsWithHashtag.test(words[i])) {
        newStr.push(
          <span style={{ color: "#1c9cef", cursor: "pointer" }}>
            {words[i]}{" "}
          </span>
        );
      } else {
        newStr.push(<span>{words[i]} </span>);
      }
    }
    console.log("newStr.join('')", newStr.join(""));
    return newStr;
  }

  const allTweets = tweetList.map((data, i) => {
    return (
      <LastTweets
        key={i}
        tweetId={data._id}
        firstname={data.author.firstname}
        username={data.author.username}
        timestamp={moment(data.timestamp).startOf("second").fromNow()}
        tweetText={displayText(data.tweet)}
      />
    );
  });

  //! Return:
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <img
            src="/twitter-white.png"
            alt="White Twitter logo"
            className={styles.miniLogo}
            onClick={() => router.push("/home")}
          />
          <div className={styles.footer}>
            <div className={styles.userCard}>
              <img className={styles.profilePic} src="/user-logo.png" alt="" />
              <div className={styles.userText}>
                <h4 className={styles.username}>{firstname}</h4>
                <h5 className={styles.identifier}>@{username}</h5>
              </div>
            </div>
            <button className={styles.logoutBtn} onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </div>
        <div className={styles.middle}>
          <h1 className={styles.title}>Home</h1>
          <Tweet />
          <div className={styles.container}>{allTweets}</div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Trends</h1>
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
        </div>
      </div>
    </>
  );
}

export default Home;
