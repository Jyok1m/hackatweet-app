import styles from "../styles/Home.module.css";

//# Imports:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/activeUser";

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

  //! Return:
  return (
    <div>
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
          <div className={styles.inputBox}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="What's up ?"
            />
            <div className={styles.tweetBtn}>
              <p className={styles.characterCount}>0/280</p>
              <button className={styles.submitTweet}>Tweet</button>
            </div>
          </div>
          <div className={styles.tweetContainer}>
            <div className={styles.data}>
              <img className={styles.profilePic} src="/user-logo.png" alt="" />
              <div className={styles.userData}>
                <h4 className={styles.userName}>John</h4>
                <h5 className={styles.identifier}>@JohnCena</h5>
                <p> - </p>
                <h5 className={styles.timestamp}>a few seconds ago</h5>
              </div>
            </div>
            <div className={styles.tweetText}>
              <p className={styles.tweet}>
                You can't see me !{" "}
                <span className={styles.hashtag}>#cenation</span>
              </p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faHeart} className={styles.likeIcon} />
              <p className={styles.likeCounter}>0</p>
              <FontAwesomeIcon icon={faTrash} className={styles.likeIcon} />
            </div>
          </div>
          <div className={styles.tweetContainer}>
            <div className={styles.data}>
              <img className={styles.profilePic} src="/user-logo.png" alt="" />
              <div className={styles.userData}>
                <h4 className={styles.userName}>John</h4>
                <h5 className={styles.identifier}>@JohnCena</h5>
                <p> - </p>
                <h5 className={styles.timestamp}>a few seconds ago</h5>
              </div>
            </div>
            <div className={styles.tweetText}>
              <p className={styles.tweet}>
                You can't see me !{" "}
                <span className={styles.hashtag}>#cenation</span>
              </p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faHeart} className={styles.likeIcon} />
              <p className={styles.likeCounter}>0</p>
              <FontAwesomeIcon icon={faTrash} className={styles.likeIcon} />
            </div>
          </div>
          <div className={styles.tweetContainer}>
            <div className={styles.data}>
              <img className={styles.profilePic} src="/user-logo.png" alt="" />
              <div className={styles.userData}>
                <h4 className={styles.userName}>John</h4>
                <h5 className={styles.identifier}>@JohnCena</h5>
                <p> - </p>
                <h5 className={styles.timestamp}>a few seconds ago</h5>
              </div>
            </div>
            <div className={styles.tweetText}>
              <p className={styles.tweet}>
                You can't see me !{" "}
                <span className={styles.hashtag}>#cenation</span>
              </p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faHeart} className={styles.likeIcon} />
              <p className={styles.likeCounter}>0</p>
              <FontAwesomeIcon icon={faTrash} className={styles.likeIcon} />
            </div>
          </div>
          <div className={styles.tweetContainer}>
            <div className={styles.data}>
              <img className={styles.profilePic} src="/user-logo.png" alt="" />
              <div className={styles.userData}>
                <h4 className={styles.userName}>John</h4>
                <h5 className={styles.identifier}>@JohnCena</h5>
                <p> - </p>
                <h5 className={styles.timestamp}>a few seconds ago</h5>
              </div>
            </div>
            <div className={styles.tweetText}>
              <p className={styles.tweet}>
                You can't see me !{" "}
                <span className={styles.hashtag}>#cenation</span>
              </p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faHeart} className={styles.likeIcon} />
              <p className={styles.likeCounter}>0</p>
              <FontAwesomeIcon icon={faTrash} className={styles.likeIcon} />
            </div>
          </div>
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
    </div>
  );
}

export default Home;
