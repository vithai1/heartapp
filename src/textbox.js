import React, { useState } from 'react';
import './textbox.css';

const TextBox = () => {
  const [board, setBoard] = useState(Array(12).fill(''));

  const handleBoxChange = (index, newText) => {
    const newBoard = [...board];
    newBoard[index] = newText;
    setBoard(newBoard);

    const editableElement = document.querySelector(`.box:nth-child(${index + 1})`);
    if (editableElement) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(editableElement);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const renderBoxes = () => {
    return board.map((text, index) => (
      <div
        key={index}
        className="box"
        contentEditable
        onInput={(e) => handleBoxChange(index, e.currentTarget.textContent)}
      >
        {text}
      </div>
    ));
  };

  return <div className="board">{renderBoxes()}</div>;
};

export default TextBox;
