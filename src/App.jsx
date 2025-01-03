import { useState } from 'react';
import Review from './Review';

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h3>our reviews</h3>
          <div className="title-underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};
export default App;
