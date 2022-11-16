import { FilterTitle, FilterInput } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const filterInputHandler = e => {
    const inputValue = e.target.value;
    dispatch(setFilterValue(inputValue));
  };
  
  return (
    <section>
      <FilterTitle>
        Find contacts by name
      
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={filterInputHandler}
          title="Search field"
          required
          />
        </FilterTitle>
    </section>
  );
};

export default Filter;