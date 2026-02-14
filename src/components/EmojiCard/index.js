// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, getEmojiId} = props
  const onClickEmoji = () => getEmojiId(eachEmoji.id)
  return (
    <li className="emoji-cards">
      <button className="emojibtn" onClick={onClickEmoji}>
        <img src={eachEmoji.emojiUrl} alt={eachEmoji.emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
