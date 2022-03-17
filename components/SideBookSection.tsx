import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { MdOutlineStickyNote2 } from 'react-icons/md';
import { CgList } from 'react-icons/cg';
import AudioPlayer from './AudioPlayer';

interface ComponentProps {
  toggle: boolean;
  turnOff: () => void;
}

export const SideBookSection: React.FC<ComponentProps> = ({
  toggle,
  turnOff,
}) => {
  return (
    <>
      {toggle === true ? (
        <div className="side-book-section">
          <div className="side-book-section-centering-section">
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
                src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0064/9780006479888.jpg"
                alt="games of thrones"
              />

              <div className="reading-book-info">
                <h2 className="reading-book-info-title">Games of Thrones</h2>
                <p className="reading-book-info-author">Vardas Pavarde</p>
                <p className="reading-book-info-chapter">
                  Chapter Eight: Partners
                </p>
                <button className="chapter-list-button">
                  <CgList style={{ marginRight: '5px' }} /> Chapter-list
                </button>
              </div>
            </div>

            <div>
              <p className="book-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                nulla possimus rem odit quo, quas laboriosam expedita ducimus
                molestias iste vel doloremque perspiciatis labore nostrum magnam
                accusantium officiis porro sed ea ipsa libero ut, neque non.
                Nemo quas maxime modi repellendus a iste provident voluptatibus
                perferendis rerum blanditiis! Hic ratione consequuntur dolores,
                veritatis ipsa excepturi aut eum voluptas sequi inventore
                facilis placeat, debitis, harum architecto voluptate omnis?
                Explicabo, error ad. Omnis recusandae porro eum? Eveniet maxime
                labore quasi nulla, suscipit asperiores, fuga possimus
                cupiditate autem minima
              </p>
            </div>
          </div>
          <AudioPlayer />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SideBookSection;
