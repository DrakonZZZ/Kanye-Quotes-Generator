import { useState, useRef } from 'react';
import { quotesList } from '../data';
import { motion } from 'framer-motion';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';

export const Layout = () => {
  const [qcount, setQCount] = useState(0);
  const [quotes, SetQuotes] = useState([]);

  const increaseCount = () => {
    if (qcount > 20) {
      return;
    }
    setQCount(qcount + 1);
  };

  const decreaseCount = () => {
    if (qcount <= 0) {
      return;
    }
    setQCount(qcount - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(quotes);

    SetQuotes(quotesList.slice(0, +qcount));
  };
  return (
    <>
      <div className="container">
        <div className="head-section">
          <h1>YEEZUS</h1>
          <div className="quote-counter">
            <div>
              <button onClick={increaseCount} className="btn-sec">
                <BsFillArrowUpCircleFill className="icon" />
              </button>
              <div className="count">{qcount}</div>
              <button onClick={decreaseCount} className="btn-sec">
                <BsFillArrowDownCircleFill className="icon" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <button className="btn" type="submit">
                Generate
              </button>
            </form>
          </div>
        </div>

        <div className="ye-quote">
          {quotes.map((data) => {
            return (
              <>
                <p key={data.id}>
                  {data.quote}
                  <div className="tag">{data.id}</div>
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
