import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Far Modern Cod</title>
        <meta property="og:title" content="Far Modern Cod" />
      </Helmet>
      <a
        href="https://pl1.kamadeta.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/523533-400w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
