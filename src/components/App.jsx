import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createEmoji(emojiterm) {
  return (
    <Emoji
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      description={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
