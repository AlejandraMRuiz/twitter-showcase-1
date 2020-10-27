import React, { useState, useEffect } from 'react';
import tweetsData from '../../twitterData'
import SearchForm from './SearchForm'
import DisplayTweets from './DisplayTweets'
import './Search.css';

function Search() {
  const [data] = useState(tweetsData)
  const [inputValue, setInputValue] = useState()
  const [tweets, setTweets] = useState([])

  function getInputValue(e) {
    setInputValue(e.target.value)
  }

  function handleSearchClick(e) {
    e.preventDefault()

    const tweetsSelected = e.target.id === 'username' ?
      data.filter(tweet => tweet.user.toLowerCase().includes(inputValue)) :
      data.filter(tweet => tweet.text.toLowerCase().includes(inputValue))

    // returns only 5 characters
    setTweets(tweetsSelected.slice(0, 5))
  }

  return (
    <div id="search-container">
      <SearchForm handleSearchClick={handleSearchClick} getInputValue={getInputValue} />
      <div id="tweets">
        {tweets.map(tweet =>
          <DisplayTweets tweet={tweet} key={tweet.id} />)}
      </div>
    </div>
  )
}

export default Search