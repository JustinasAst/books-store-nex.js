import React, { useState, useEffect } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { GiPauseButton } from 'react-icons/gi';

interface ComponentProps {
  listenedBookData: number;
}

interface BookDataById {
  userId: number;
  id: number;
  title: string;
  name: string;
  surname: string;
  img: string;
}

export const ListenedBookBox: React.FC<ComponentProps> = ({
  listenedBookData,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bookData, setBookData] = useState<BookDataById>({
    userId: 0,
    id: 0,
    title: '',
    name: '',
    surname: '',
    img: '',
  });

  const pressPlayer = () => {
    if (isPlaying === false) setIsPlaying(true);
    if (isPlaying === true) setIsPlaying(false);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/books/${listenedBookData}`)
      .then((response) => response.json())
      .then((data) => setBookData(data));
  }, [listenedBookData]);

  console.log(bookData);

  return (
    <div className="main-listened-box">
      <div className="book-cover-box">
        <img className="listened-book" src={`${bookData.img}`} alt="Harry" />
      </div>

      <div className="book-title-box">
        <p className="continue-reading-title">Continue reading</p>
        <div className="book-name-container">
          <h2
            className="book-name"
            title="Harry Potter and the Phylosofers Stone"
          >
            {bookData.title}
          </h2>
        </div>

        <div className="author-and-chapter-title ">
          <span className="author-name">{`${bookData.name} ${bookData.surname}`}</span>
          <span className="dot">•</span>
          <span className="book-chapter">12 Chapters</span>
        </div>

        <div className="progres-value-box">
          <p className="chapter-percent">Chapters 8</p>
          <p className="chapter-percent"> 90%</p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-background">
            <div className="progress-value"></div>
          </div>
          <div className="play-button-box-phone">
            <button type="button" className="play-button" onClick={pressPlayer}>
              {isPlaying ? <GiPauseButton /> : <BsFillCaretRightFill />}
            </button>
          </div>
        </div>
      </div>

      <div className="play-button-box">
        <button type="button" className="play-button" onClick={pressPlayer}>
          {isPlaying ? <GiPauseButton /> : <BsFillCaretRightFill />}
        </button>
      </div>
    </div>
  );
};

export default ListenedBookBox;
