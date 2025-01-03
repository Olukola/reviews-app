import { useState } from 'react';
import customers from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // declare state value
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = customers[index];

  // function to reset index
  const checkIndex = (index) => {
    if (index > customers.length - 1) {
      return 0;
    }
    if (index < 0) {
      return customers.length - 1;
    }
    return index;
  };

  // event listeners
  const prevRev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };
  const nextRev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };
  const randomRev = () => {
    let randomIndex = Math.floor(Math.random() * customers.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    console.log(checkIndex(randomIndex));

    setIndex(checkIndex(randomIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button onClick={prevRev} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextRev} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomRev} className="btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
