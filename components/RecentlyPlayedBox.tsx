/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksRequest } from '../redux-book-store/actions';
import { RootState } from '../redux-book-store/reducers/rootReducers';

interface ComponentProps {
  turnOn: () => void;
  setBookId: any;
}

export const RecentlyPlayedBox: React.FC<ComponentProps> = ({
  turnOn,
  setBookId,
}) => {
  const dispatch = useDispatch();
  const { pending, books, error } = useSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    dispatch(fetchBooksRequest());
  }, []);

  return (
    <div className="recently-played-book-section">
      <div className="recently-played-book-section-header">
        <h3 className="recently-played-title">Recently Played</h3>
        <a className="recently-payed-all-link" href="#">
          See All
        </a>
      </div>

      <div className="book-list-section">
        {books.slice(0, 4).map((item, id) => (
          <div
            key={item.id}
            className="recently-played-book-box"
            onClick={() => setBookId(item.id)}
          >
            <img
              onClick={turnOn}
              className="side-book-section-image"
              src={`${item.img}`}
              alt={item.title}
            />

            <h3>{item.title}</h3>
            <p>{`${item.name} ${item.surname}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayedBox;
