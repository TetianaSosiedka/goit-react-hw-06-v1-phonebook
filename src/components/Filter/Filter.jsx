import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const [setSearchParams] = useSearchParams();

  const handleChangeFilter = event => {
    const filterValue = event.target.value;
    filterValue.trim();
    if (filterValue !== 0) {
      dispatch(setFilter(filterValue));
      setSearchParams({ filter: filterValue });
    }
  };

  return (
    <Input
      onChange={handleChangeFilter}
      type="text"
      name="filter"
      value={value}
      placeholder="Filter"
    ></Input>
  );
};

export default Filter;
