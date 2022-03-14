import React from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';

export const ListenedBookBox = () => {
  return (
    <div className="main-lestened-box">
      <div className="book-cover-box">
        <img
          className="listenedBook"
          src="https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855652.jpg"
          alt="Harry"
        />
      </div>
      <div className="book-title-box">
        <p>Continue reading</p>
        <h2>Harry Potter and the Phylosofers Stone</h2>
        <p>
          John Roberts <span className="dot">•</span> 12 Chapters
        </p>
        <div className="progres-value-box">
          <p>Chapters 8</p>
          <p> 90%</p>
        </div>
        <div className="progress-background">
          <div className="progress-value"></div>
        </div>
      </div>
      <div className="play-button-box">
        <button className="play-button">
          <BsFillCaretRightFill />
        </button>
      </div>
    </div>
  );
};

export default ListenedBookBox;
