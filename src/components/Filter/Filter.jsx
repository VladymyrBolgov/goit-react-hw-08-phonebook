import { FilterTitle, FilterInput } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue,  selectContacts } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts);

  const filterInputHandler = e => {
    const inputValue = e.target.value;

    const serchContact = contacts.filter(({ name }) =>
      name.toUpperCase().includes(inputValue.toUpperCase())
    );
    console.log(serchContact);
    if (serchContact.length === 0) {
      alert.failure('Нет такого контакта');
    }

    dispatch(setFilterValue(inputValue));
  };
  
  
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
        title="Search field"
        required
      />
    </div>
  );
};

export default Filter;