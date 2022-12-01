import React, { useState } from 'react';
import { Card, Button, Form, FormControl } from 'react-bootstrap';


const CardList = ({ cards, months, tags, cities, minPrice, maxPrice }) => {
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [priceRange, setPriceRange] = useState({
    min: minPrice,
    max: maxPrice
  });

  const handleMonthChange = (event) => {
    const selectedOptions = [...event.target.options]
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedMonths(selectedOptions);
  };

  const handleTagChange = (event) => {
    const selectedOptions = [...event.target.options]
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedTags(selectedOptions);
  };

  const handleCityChange = (event) => {
    const selectedOptions = [...event.target.options]
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedCities(selectedOptions);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange({
      min: event.target.value,
      max: priceRange.max
    });
  };

  

  const filteredCards = cards.filter((card) => {
    const monthMatch = selectedMonths.length === 0 || selectedMonths.includes(card.month);
    const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => card.tags.includes(tag));
    const cityMatch = selectedCities.length === 0 || selectedCities.includes(card.city);
    const priceMatch = card.price >= priceRange.min && card.price <= priceRange.max;
    return monthMatch && tagMatch && cityMatch && priceMatch;
  });

return (
  <>
    <Form inline>
      <Form.Group controlId="formMonthSelect">
        <Form.Label>Month:</Form.Label>
        <Form.Control
          as="select"
          multiple
          onChange={handleMonthChange}
          value={selectedMonths}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formTagSelect">
        <Form.Label>Tag:</Form.Label>
        <Form.Control
          as="select"
          multiple
          onChange={handleTagChange}
          value={selectedTags}
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCitySelect">
        <Form.Label>City:</Form.Label>
        <Form.Control
          as="select"
          multiple
          onChange={handleCityChange}
          value={selectedCities}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formPriceRange">
        <Form.Label>Price:</Form.Label>
        <FormControl
          type="range"
          min={minPrice}
          max={maxPrice}
          step={1}
          onChange={handlePriceRangeChange}
          value={priceRange.min}
        />
        <FormControl
          type="range"
          min={minPrice}
          max={maxPrice}
          step={1}
          onChange={handlePriceRangeChange}
          value={priceRange.max}
        />
      </Form.Group>
    </Form>
    <div className="card-deck">
      {filteredCards.map((card) => (
        <Card key={card.id}>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  </>
);
}

export default CardList;
