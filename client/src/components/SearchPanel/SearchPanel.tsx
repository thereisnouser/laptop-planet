import {
  React, useState, useHistory,
  Paper, InputBase, IconButton, SearchIcon,
} from '../../imports';
import './SearchPanel.css';

interface SearchPanelProps {
  filterItemsList: (value: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ filterItemsList }): React.ReactElement => {
  const history = useHistory();
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    history.push({
      search: `?description=${value}`,
    });

    filterItemsList(value);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} className="search-panel">
      <InputBase
        onChange={(e) => setValue(e.target.value)}
        className="search-panel__input"
        placeholder="Search..."
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchPanel;
