import './index.css'

const Navbar = props => {
  const {timer, score} = props

  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-and-time-container">
        <li className="score-li-cont">
          <p className="score-text">
            Score:
            <span className="span"> {score}</span>
          </p>
        </li>
        <li className="timer-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="span"> {timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
