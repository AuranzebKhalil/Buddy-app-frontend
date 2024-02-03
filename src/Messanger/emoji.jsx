import React, { useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const EmojiPicker = ({ onEmojiSelect }) => {
    const [chosenEmojis, setChosenEmojis] = useState([]);

    const handleEmojiClick = (event, emojiObject) => {
      const newEmojiSrc = emojiObject?.target?.src;
      const newChosenEmojis = [...chosenEmojis, newEmojiSrc];
      setChosenEmojis(newChosenEmojis);
  
      if (onEmojiSelect) {
        onEmojiSelect(newChosenEmojis);
      }
    };
  

  return (
    <div style={{ backgroundColor: 'white', position: 'absolute', bottom: '50px' }}>
      <h2>Emoji Picker</h2>
      <Picker onEmojiClick={handleEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK} />
      {chosenEmojis.length > 0 && (
        <div>
          Chosen Emojis:
          {/* <ul>
            {chosenEmojis.map((emoji, index) => (
              <li key={index}>{emoji.emoji}</li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
