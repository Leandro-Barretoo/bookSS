import React from 'react';
import Nav from './Nav';
import BookCard from './BookCard';
import Line from './Line';

const MainPage = () => (
  <div className="Panel-bg">
    <Nav />
    <BookCard />
    <BookCard />
    <BookCard />
    <Line />
  </div>
);

export default MainPage;
