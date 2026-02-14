import {useState} from 'react'
import EmojiCard from '../EmojiCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

const EmojiGame = props => {
  const {emojiList, getIdEmoji} = props

  const [listOfEmoji, setListOfEmoji] = useState(emojiList)
  const getEmojiId = id => {
    const newList = [...listOfEmoji].sort(() => Math.random() - 0.5)
    setListOfEmoji(newList)
    return getIdEmoji(id)
  }

  return (
    <div className="bg-emoji-container">
      <ul className="cards-Container">
        {listOfEmoji.map(emoji => (
          <EmojiCard eachEmoji={emoji} key={emoji.id} getEmojiId={getEmojiId} />
        ))}
      </ul>
    </div>
  )
}

export default EmojiGame
