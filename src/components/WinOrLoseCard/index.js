// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const onClickPlayAgain = () => playAgain()

  const loseCard = () => (
    <div>
      <div className="loseCardNav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          style={{marginRight: '5px'}}
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="resultCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="winOrLoseImage"
        />
        <h1 className="heading">You Lose</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <button onClick={onClickPlayAgain}>Play Again</button>
      </div>
    </div>
  )

  const winCard = () => (
    <div>
      <div className="loseCardNav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="resultCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="winOrLoseImage"
        />
        <h1 className="heading">You Won</h1>
        <p>Best Score</p>
        <p>{score}/12</p>
        <button onClick={onClickPlayAgain}>Play Again</button>
      </div>
    </div>
  )

  const winLoseCard = () => {
    if (score === 12) {
      return winCard()
    }
    return loseCard()
  }
  return <div className="winLoseContainer">{winLoseCard()}</div>
}
export default WinOrLoseCard
