import React from 'react';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';

const MostPopularSection = () => {
  return (
    <div className="most-popular-played-book-section">
      <div className="most-popular-played-book-section-header">
        <h3>Most Popular</h3>
        <p>See All</p>
      </div>

      <div className="most-popular-played-book-box-section-list">
        <div className="most-popular-played-book-box">
          <img
            src="https://bags-of-books.co.uk/wp-content/uploads/2020/11/9780007458424.jpg"
            alt="hobbit"
          />

          <div className="most-popular-played-book-box-info">
            <p className="author-name">Vardas Pavarde</p>
            <h4 className="most-popular-book-name">Pavadinimas</h4>

            <div className="most-popular-played-book-box-time-rating">
              <p>
                <FaHeadphonesAlt /> 3h 32min
              </p>
              <p>
                <BsFillStarFill style={{ color: 'rgb(240, 198, 9)' }} /> 4.8
              </p>
            </div>
          </div>
        </div>

        <div className="most-popular-played-book-box">
          <img
            src="https://bags-of-books.co.uk/wp-content/uploads/2020/11/9780007458424.jpg"
            alt="hobbit"
          />

          <div className="most-popular-played-book-box-info">
            <p className="author-name">Vardas Pavarde</p>
            <h4 className="most-popular-book-name">Pavadinimas</h4>

            <div className="most-popular-played-book-box-time-rating">
              <p>
                <FaHeadphonesAlt /> 3h 32min
              </p>
              <p>
                <BsFillStarFill style={{ color: 'rgb(240, 198, 9)' }} /> 4.8
              </p>
            </div>
          </div>
        </div>

        <div className="most-popular-played-book-box">
          <img
            src="https://bags-of-books.co.uk/wp-content/uploads/2020/11/9780007458424.jpg"
            alt="hobbit"
          />

          <div className="most-popular-played-book-box-info">
            <p className="author-name">Vardas Pavarde</p>
            <h4 className="most-popular-book-name">Pavadinimas</h4>

            <div className="most-popular-played-book-box-time-rating">
              <p>
                <FaHeadphonesAlt /> 3h 32min
              </p>
              <p>
                <BsFillStarFill style={{ color: 'rgb(240, 198, 9)' }} /> 4.8
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularSection;
