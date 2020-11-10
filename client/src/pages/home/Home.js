import React from 'react'
import Bird from '../../images/twitter-logo-bird.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="home-container">
      <div className="row">
        <img src={Bird} alt="bird" />
        <div className="center">
          <h1 className="home-title">Twitter Showcase</h1>
          <Link to="/search" >
            <button className="btn home-btn">Search Tweets !</button>
          </Link>
        </div>
      </div>
      <div className="app-description">
        <p>This app allows you to retreive tweets from your favourite people without having an account on twitter.
        Don't have a person in your mind ? Go to our random section and click on one of showcases. Each click you will get a random tweet from that spesific showcase.</p>
      </div>
    </div>
  )
}

