import React, { Component, useState } from 'react';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BsFillStarFill, BsTypeH1 } from 'react-icons/bs';

export interface IBooks {
  userId: number;
  id: number;
  title: string;
  name: string;
  popular: boolean;
  surname: string;
  body: string;
  img: string;
}

interface ComponentProps {
  booksData: IBooks[];
}

const MostPopularSection: React.FC<ComponentProps> = ({ booksData }) => {
  return (
    <div className="most-popular-played-book-section">
      <div className="most-popular-played-book-section-header">
        <h3 className="most-popular-title">Most Popular</h3>
        <p className="most-popular-see-all-link">See All</p>
      </div>

      <div className="most-popular-played-book-box-section-list">
        {booksData
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
