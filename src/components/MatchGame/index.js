import {Component} from 'react'

import Navbar from '../Navbar'
import Game from '../Game'
import ScoreCard from '../ScoreCard'

import './index.css'

class MatchGame extends Component {
  state = {
    isGameRunning: true,
    timer: 60,
    score: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.decreaseSeconds, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  increaseScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
    }))
  }

  decreaseSeconds = () => {
    const {timer} = this.state

    if (timer > 0) {
      this.setState({timer: timer - 1})
    } else {
      clearInterval(this.timerId)
      this.stopGame()
    }
  }

  playAgain = () => {
    this.timerId = setInterval(this.decreaseSeconds, 1000)
    this.setState({
      score: 0,
      isGameRunning: true,
      timer: 60,
    })
  }

  stopGame = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      isGameRunning: !prevState.isGameRunning,
    }))
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {score, isGameRunning, timer} = this.state

    return (
      <div className="bg-container">
        <Navbar score={score} isGameRunning={isGameRunning} timer={timer} />

        {isGameRunning ? (
          <Game
            tabsList={tabsList}
            imagesList={imagesList}
            increaseScore={this.increaseScore}
            stopGame={this.stopGame}
          />
        ) : (
          <ScoreCard score={score} playAgain={this.playAgain} />
        )}
      </div>
    )
  }
}

export default MatchGame
