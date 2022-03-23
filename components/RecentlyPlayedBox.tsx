import React from 'react';
import { ImInsertTemplate } from 'react-icons/im';

export interface IBooks {
  userId: number;
  id: number;
  title: string;
  name: string;
  surname: string;
  body: string;
  img: string;
}

interface ComponentProps {
  turnOn: () => void;
  booksData: IBooks[];
}

export const RecentlyPlayedBox: React.FC<ComponentProps> = ({
  turnOn,
  booksData,
}) => {
  return (
    <div className="recently-played-book-section">
      <div className="recently-played-book-section-header">
        <h3>Recently Played</h3>
        <a href="#">See All</a>
      </div>

      <div className="book-list-section">
        {booksData.slice(0, 4).map((item, id) => (
          <div
            key={item.id}
            className="recently-played-book-box"
            onClick={turnOn}
          >
            <img
              className="side-book-section-image"
              src={`${item.img}`}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <p>{`${item.name} ${item.surname}`}</p>
          </div>
        ))}

        {/* 
        <div className="recently-played-book-box">
          <img
            src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0064/9780006479888.jpg"
            alt="games of thrones"
          />
          <h3>Games of Thrones</h3>
          <p>Vardenis Pavardenis</p>
        </div>

        <div className="recently-played-book-box">
          <img
            src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0064/9780006479888.jpg"
            alt="games of thrones"
          />
          <h3>Games of Thrones</h3>
          <p>Vardenis Pavardenis</p>
        </div>

        <div className="recently-played-book-box">
          <img
            src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0064/9780006479888.jpg"
            alt="games of thrones"
          />
          <h3>Games of Thrones</h3>
          <p>Vardenis Pavardenis</p>
        </div> */}
      </div>
    </div>
  );
};

export default RecentlyPlayedBox;
