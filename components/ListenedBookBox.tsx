import React from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';

export const ListenedBookBox = () => {
  return (
    <div className="main-listened-box">
      <div className="book-cover-box">
        <img
          className="listenedBook"
          src="https://cdn.waterstones.com/bookjackets/large/9781/4088/9781408855652.jpg"
          alt="Harry"
        />
      </div>

      <div className="book-title-box">
        <p>Continue reading</p>
        <div className="book-name-container">
          <h2
            className="book-name"
            title="Harry Potter and the Phylosofers Stone"
          >
            Harry Potter and the Phylosofers Stone
          </h2>
        </div>

        <p>
          <span className="author-name">John Roberts</span>{' '}
          <span className="dot">•</span>
          <span className="book-chapter">12 Chapters</span>
        </p>

        <div className="progres-value-box">
          <p className="chapter-percent">Chapters 8</p>
          <p className="chapter-percent"> 90%</p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-background">
            <div className="progress-value"></div>
          </div>
          <div className="play-button-box-phone">
            <button type="button" className="play-button">
              <BsFillCaretRightFill />
            </button>
          </div>
        </div>
      </div>

      <div className="play-button-box">
        <button type="button" className="play-button">
          <BsFillCaretRightFill />
        </button>
      </div>
    </div>
  );
};

export default ListenedBookBox;
