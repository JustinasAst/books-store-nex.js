import React from 'react';

interface ComponentProps {
  turnOn: () => void;
}

export const RecentlyPlayedBox: React.FC<ComponentProps> = ({ turnOn }) => {
  return (
    <div className="recently-played-book-section">
      <div className="recently-played-book-section-header">
        <h3>Recently Played</h3>
        <a href="#">See All</a>
      </div>

      {/* <div className="book-list-section">
        <div className="recently-played-book-box" onClick={turnOn}>
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
        </div>

        <div className="recently-played-book-box">
          <img
            src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0064/9780006479888.jpg"
            alt="games of thrones"
          />
          <h3>Games of Thrones</h3>
          <p>Vardenis Pavardenis</p>
        </div>
      </div> */}
    </div>
  );
};

export default RecentlyPlayedBox;
