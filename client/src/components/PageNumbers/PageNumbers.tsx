import {
  React, Pagination, useHistory,
} from '../../imports';
import './PageNumbers.css';

const PageNumbers = () => {
  const history = useHistory();

  const changePageNumber = (event: React.ChangeEvent<unknown>, value: number) => {
    history.push({
      search: `page=${value}`,
    });
  };

  return (
    <Pagination
      onChange={changePageNumber}
      count={10}
      variant="outlined"
      shape="rounded"
      className="page-numbers"
    />
  );
};

export default PageNumbers;
