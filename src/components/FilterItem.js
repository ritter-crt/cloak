import { useState } from 'react';

import { categoryArray, difficultyArray } from '../data';

import Card from './Card';

import { Cards } from './Card/Card.styles';

import { SearchBar } from './ui/SearchBar.styles';
import { Text } from './ui/Text.styles';
import { FormWrapper, StyledSelect } from './Form/Form.styles';

export default function FilterItem({ items }) {
  const [query, setQuery] = useState('');
  const [filterParam, setFilterParam] = useState(['All']);
  const [searchParam] = useState([
    'category',
    'difficulty',
    'title',
    'description',
  ]);

  const filteredItems =
    //______________________To start with empty page set initial state to empty array
    // query.length > 0
    //   ?
    items.filter((item) => {
      if (item.difficulty === filterParam || item.category === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam == 'All') {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  // like so___________________________
  // : [];

  return (
    <>
      <>
        <SearchBar
          type="search"
          placeholder="Search for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </>

      <div>
        <Text fontSize="10pt" letterSpacing="2pt">
          sort by category
        </Text>
        <StyledSelect
          defaultValue="category"
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
        >
          <option defaultValue="All">all</option>
          {categoryArray &&
            categoryArray.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </StyledSelect>

        <Text fontSize="10pt" letterSpacing="2pt">
          sort by difficulty level
        </Text>
        <StyledSelect
          marginBottom="3rem"
          defaultValue="difficulty"
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
        >
          <option value="All">all</option>
          {difficultyArray &&
            difficultyArray.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
        </StyledSelect>
      </div>

      <Cards>
        {filteredItems.length <= 0 ? (
          <Text fontSize="10pt">No items found</Text>
        ) : (
          filteredItems.map((item) => <Card key={item._id} item={item}></Card>)
        )}
      </Cards>
    </>
  );
}
