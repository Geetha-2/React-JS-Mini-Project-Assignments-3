import './index.css'

const ScoreCard = props => {
  const {score, playAgain} = props

  const onClickReset = () => {
    playAgain()
  }

  return (
    <div className="bg-scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="score">YOUR SCORE</p>
      <h1 className="score">{score}</h1>

      <button type="button" className="play-again-btn" onClick={onClickReset}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />
        <p className="play-again-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
