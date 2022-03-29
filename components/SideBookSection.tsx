import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { MdOutlineStickyNote2 } from 'react-icons/md';
import { CgList } from 'react-icons/cg';
import AudioPlayer from './AudioPlayer';
import { stringify } from 'querystring';

interface ComponentProps {
  toggle: boolean;
  bookId: number;
  setListenedBookData: any;
  turnOff: () => void;
}

interface BookDataById {
  userId: number;
  id: number;
  title: string;
  name: string;
  surname: string;
  body: string;
  img: string;
}

export const SideBookSection: React.FC<ComponentProps> = ({
  toggle,
  turnOff,
  bookId,
  setListenedBookData,
}) => {
  const [bookData, setBookData] = useState<BookDataById>({
    userId: 0,
    id: 0,
    title: '',
    name: '',
    surname: '',
    body: '',
    img: '',
  });

  useEffect(() => {
    fetch(`http://localhost:8000/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => setBookData(data));
  }, [bookId]);

  const handleClick = () => {
    setListenedBookData(bookId);
  };

  return (
    <>
      {toggle === true ? (
        <div className="side-book-section">
          <div className="scroll-content-box">
            <div className="side-book-section-centering-section">
              <div className="heder-book-section">
                <div className="side-book-section-header">
                  <p style={{ fontSize: '30px' }}>
                    <HiOutlineArrowNarrowLeft onClick={turnOff} />
                  </p>
                  <p style={{ fontSize: '30px' }}>
                    <MdOutlineStickyNote2 />
                  </p>
                </div>

                <div className="side-book-section-main-book">
                  <img
                    className="active-book-image"
                    src={`${bookData.img}`}
                    alt="games of thrones"
                  />

                  <div className="reading-book-info">
                    <h2 className="reading-book-info-title">
                      {bookData.title}
                    </h2>

                    <p className="reading-book-info-author">
                      {bookData.name} {bookData.surname}
                    </p>
                    <p className="reading-book-info-chapter">
                      Chapter Eight: Partners
                    </p>

                    <button type="button" className="chapter-list-button">
                      <CgList style={{ marginRight: '5px' }} /> Chapter-list
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-text">
              <p className="chapter-text">{bookData.body}</p>
            </div>
          </div>

          <div className="audio-player-box">
            <AudioPlayer handleClick={handleClick} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default SideBookSection;
function data(_data: any) {
  throw new Error('Function not implemented.');
}
