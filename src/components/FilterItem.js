import { useRouter } from 'next/router';
import { useState } from 'react';

import { categoryArray, difficultyArray } from '../utils';

import { StyledTitle } from './styled';
import {
  CardWrapper,
  StyledCard,
  StyledImage,
  StyledText,
  TextWrapper,
} from './common/Card.styles';
import { Text } from './common/Text.styles';
import { Wrapper } from './common/Wrapper';
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
        <Text letterSpacing="2pt">sort by category</Text>
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

        <Text letterSpacing="2pt">sort by difficulty level</Text>
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

      <CardWrapper>
        {filteredItems.length <= 0 ? (
          <Text letterSpacing="3pt">No items found</Text>
        ) : (
          filteredItems.map((item) => (
            <StyledCard key={item._id}>
              <StyledImage
                onClick={() => router.push(`/item-page/${item._id}`)}
                src={item.images[0]}
                height="150"
                width="150"
                alt={item.description}
              />
              <StyledTitle>{item.title}</StyledTitle>
              <TextWrapper>
                <StyledText>{item.difficulty}</StyledText>
                <StyledText>{item.price} €</StyledText>
              </TextWrapper>
            </StyledCard>
          ))
        )}
      </CardWrapper>
    </>
  );
}
