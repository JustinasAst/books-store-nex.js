import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksRequest } from '../redux-book-store/actions';
import { RootState } from '../redux-book-store/reducers/rootReducers';

// export interface IBooks {
//   userId: number;
//   id: number;
//   title: string;
//   name: string;
//   surname: string;
//   body: string;
//   img: string;
// }

interface ComponentProps {
  turnOn: () => void;
  // booksData: IBooks[];
}

export const RecentlyPlayedBox: React.FC<ComponentProps> = ({ turnOn }) => {
  const dispatch = useDispatch();
  const { pending, books, error } = useSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    dispatch(fetchBooksRequest());
  }, []);

  console.log(books, 'cia yra knygos');

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
      </div>
    </div>
  );
};

export default RecentlyPlayedBox;
