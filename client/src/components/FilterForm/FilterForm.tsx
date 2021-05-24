import {
  React, useState, Button, FormControl, InputLabel, MenuItem, Select, TextField, Grid,
} from '../../imports';
import './FilterForm.css';

interface FilterFormProps {
  filterProducts: (property: string, value: string) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ filterProducts }): React.ReactElement => {
  const [value, setValue] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    filterProducts('filter', `price ${filterType} ${value}`);
  };

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      variant="outlined"
      className="filter-form"
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <InputLabel id="demo-simple-select-outlined-label">Filter condition</InputLabel>
          <Select
            onChange={(e) => setFilterType(e.target.value as string)}
            defaultValue=""
            label="Filter condition"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            className="filter-form__select"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="eq">Equal</MenuItem>
            <MenuItem value="ne">Not equal</MenuItem>
            <MenuItem value="gt">Greater than</MenuItem>
            <MenuItem value="ge">Greater or equal</MenuItem>
            <MenuItem value="lt">Less than</MenuItem>
            <MenuItem value="le">Less or equal</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <TextField
            onChange={(e) => setValue(e.target.value)}
            label="Value"
            id="outlined-number"
            type="number"
            variant="outlined"
            className="filter-form__input"
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">Filter</Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default FilterForm;
