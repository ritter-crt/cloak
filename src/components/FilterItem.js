import { useRouter } from 'next/router';
import { useState } from 'react';

import { categoryArray, difficultyArray } from '../utils';

import {
  Card,
  CardWrapper,
  StyledImage,
  CardText,
  CardTextWrapper,
  CardTitle,
  Cards,
  CardImage,
  CardContent,
} from './common/Card.styles';
import { Wrapper } from './common/Wrapper.styles';
import { StyledSelect } from './common/Form.styles';
import { SearchBar } from './common/SearchBar.styles';

export default function FilterItem({ items }) {
  const router = useRouter();
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

      <Wrapper>
        <CardText letterSpacing="2pt">sort by category</CardText>
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

        <CardText letterSpacing="2pt">sort by difficulty level</CardText>
        <StyledSelect
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
      </Wrapper>

      <Cards>
        {filteredItems.length <= 0 ? (
          <CardText letterSpacing="3pt">No items found</CardText>
        ) : (
          filteredItems.map((item) => (
            <Card key={item._id}>
              <CardImage>
                <StyledImage
                  onClick={() => router.push(`/item-page/${item._id}`)}
                  src={item.images[0]}
                  fill={true}
                  alt={item.description}
                />
              </CardImage>
              <CardTitle>{item.title}</CardTitle>
              <CardContent>
                <p>{item.difficulty}</p>
                <p>{item.price} €</p>
              </CardContent>
            </Card>
          ))
        )}
      </Cards>
    </>
  );
}
