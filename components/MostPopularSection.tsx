import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksRequest } from '../redux-book-store/actions';
import { RootState } from '../redux-book-store/reducers/rootReducers';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';

const MostPopularSection: React.FC = () => {
  const dispach = useDispatch();
  const { pending, books, error } = useSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    dispach(fetchBooksRequest());
  }, []);
  return (
    <div className="most-popular-played-book-section">
      <div className="most-popular-played-book-section-header">
        <h3 className="most-popular-title">Most Popular</h3>
        <p className="most-popular-see-all-link">See All</p>
      </div>

      <div className="most-popular-played-book-box-section-list">
        {books
          .filter((book) => book.popular === true)
          .slice(0, 3)
          .map((item, id) => (
            <div key={id} className="most-popular-played-book-box">
              <img src={item.img} alt="hobbit" />

              <div className="most-popular-played-book-box-info">
                <p className="author-name">
                  {item.name} {item.surname}
                </p>

                <h4 className="most-popular-book-name">{item.title}</h4>

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
          ))}
      </div>
    </div>
  );
};

export default MostPopularSection;
