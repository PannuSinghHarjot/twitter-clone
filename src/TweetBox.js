import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import db from './firebase'
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage ] = useState("")

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Harjot Singh',
      username: "hsingh",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    })
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/-VGMLEpGxUGU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnIxyquC0_9Hq4EuAT2vNfNU7owCw/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
          />
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
