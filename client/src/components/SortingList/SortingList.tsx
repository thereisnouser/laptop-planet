import {
  React, InputLabel, MenuItem, FormControl, Select,
} from '../../imports';
import './SortingList.css';

const SortingList = () => {
  const [sortType, setSortType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortType(event.target.value as string);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>Sort by</InputLabel>
      <Select
        value={sortType}
        onChange={handleChange}
        label="Sort by"
        className="sorting-list__input"
      >
        <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="price asc">Price (low to high)</MenuItem>
        <MenuItem value="price desc">Price (high to low)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortingList;
