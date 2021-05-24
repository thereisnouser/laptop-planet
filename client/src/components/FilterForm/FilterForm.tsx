import {
  React, Button, FormControl, InputLabel, MenuItem, Select, TextField, Grid,
} from '../../imports';
import './FilterForm.css';

const FilterForm = () => (
  <FormControl
    component="form"
    variant="outlined"
    className="filter-form"
  >
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <InputLabel id="demo-simple-select-outlined-label">Filter condition</InputLabel>
        <Select
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

export default FilterForm;
