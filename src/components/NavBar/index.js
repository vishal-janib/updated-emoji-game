// Write your code here.
import './index.css'

const NavBar = props => {
  const {dataScore} = props
  const [score, topScore] = dataScore
  return (
    <div className="navBar-container">
      <div className="logo-Name">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          style={{height: '40px', marginRight: '5px'}}
        />
        <h1 style={{fontSize: '25px'}}>Emoji Game</h1>
      </div>
      <div className="logo-Name">
        <p style={{marginRight: '10px'}}>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
