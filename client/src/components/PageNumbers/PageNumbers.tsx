import {
  React, Pagination,
} from '../../imports';
import './PageNumbers.css';

const PageNumbers = () => (
  <Pagination
    count={10}
    variant="outlined"
    shape="rounded"
    className="page-numbers"
  />
);

export default PageNumbers;
