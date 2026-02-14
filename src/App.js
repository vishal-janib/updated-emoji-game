import {useState} from 'react'
import EmojiGame from './components/EmojiGame'
import NavBar from './components/NavBar'
import WinOrLoseCard from './components/WinOrLoseCard'

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const gameStatusObj = {
  start: 'START',
  win: 'WIN',
  lost: 'LOST',
}

const App = () => {
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [clickedEmojiList, setclickedEmojiList] = useState([])
  const [gameStatus, setGameStatus] = useState('START')

  const getIdEmoji = id => {
    if (clickedEmojiList.includes(id) === false) {
      setclickedEmojiList(prevState => [...prevState, id])
      if (score < 12) {
        setScore(prevState => prevState + 1)
      }
      if (score === 11) {
        setTopScore(12)
        setGameStatus(gameStatusObj.win)
        setclickedEmojiList([])
      }
    } else {
      if (topScore <= score) {
        setTopScore(score)
        setGameStatus(gameStatusObj.lost)
        setclickedEmojiList([])
      } else {
        setGameStatus(gameStatusObj.lost)
        setTopScore(topScore)
        setclickedEmojiList([])
      }
    }
  }

  const playAgainBtn = () => {
    setGameStatus(gameStatusObj.start)
    setScore(0)
  }

  const startTheGame = () => (
    <div>
      <NavBar dataScore={[score, topScore]} />
      <EmojiGame emojiList={emojisList} getIdEmoji={getIdEmoji} />
    </div>
  )
  const winningCard = () => (
    <div>
      <WinOrLoseCard score={score} playAgain={playAgainBtn} />
    </div>
  )

  const losingCard = () => (
    <div>
      <WinOrLoseCard score={score} playAgain={playAgainBtn} />
    </div>
  )

  const gameStatusUi = () => {
    switch (gameStatus) {
      case 'START':
        return startTheGame()
      case 'WIN':
        return winningCard()
      case 'LOST':
        return losingCard()
      default:
        return null
    }
  }

  return <div className="bg-app-container">{gameStatusUi()}</div>
}
export default App
