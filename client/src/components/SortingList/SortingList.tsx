import {
  React, InputLabel, MenuItem, FormControl, Select,
} from '../../imports';
import './SortingList.css';

interface SortingListProps {
  currentSortType: string;
  onChangeSortType: (property: string, value: string) => void;
}

const SortingList: React.FC<SortingListProps> = ({
  currentSortType, onChangeSortType,
}): React.ReactElement => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChangeSortType('orderBy', event.target.value as string);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>Sort by</InputLabel>
      <Select
        value={currentSortType}
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
