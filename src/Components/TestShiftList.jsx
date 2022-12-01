import React from 'react';
import CardList from './CardList';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card',
    month: 'January',
    tags: ['tag1', 'tag2'],
    city: 'New York',
    price: 100
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the second card',
    month: 'February',
    tags: ['tag2', 'tag3'],
    city: 'Los Angeles',
    price: 200
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the third card',
    month: 'March',
    tags: ['tag1', 'tag3'],
    city: 'Chicago',
    price: 300
  }
];

const months = ['January', 'February', 'March'];
const tags = ['tag1', 'tag2', 'tag3'];
const cities = ['New York', 'Los Angeles', 'Chicago'];

const TestShiftList = () => {
  return (
    <div className="container">
      <CardList
        cards={cards}
        months={months}
        tags={tags}
        cities={cities}
        minPrice={100}
        maxPrice={300}
      />
    </div>
  );
};

export default TestShiftList;