import {
  React, Button, FormControl, InputLabel, MenuItem, Select, TextField,
} from '../../imports';

const FilterForm = () => (
  <FormControl
    component="form"
    variant="outlined"
  >
    <InputLabel id="demo-simple-select-outlined-label">Filter condition</InputLabel>
    <Select
      label="Filter condition"
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
    >
      <MenuItem value=""><em>None</em></MenuItem>
      <MenuItem value="eq">Equal</MenuItem>
      <MenuItem value="ne">Not equal</MenuItem>
      <MenuItem value="gt">Greater than</MenuItem>
      <MenuItem value="ge">Greater or equal</MenuItem>
      <MenuItem value="lt">Less than</MenuItem>
      <MenuItem value="le">Less or equal</MenuItem>
    </Select>
    <TextField
      label="Value"
      id="outlined-number"
      type="number"
      variant="outlined"
    />
    <Button type="submit">
      Filter
    </Button>
  </FormControl>
);

export default FilterForm;
