import {
  React, Pagination, useHistory,
} from '../../imports';
import './PageNumbers.css';

interface PageNumberProps {
  changePage: (property: string, value: string) => void;
}

const PageNumbers: React.FC<PageNumberProps> = ({ changePage }): React.ReactElement => {
  const changeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    changePage('page', String(value));
  };

  return (
    <Pagination
      onChange={changeHandler}
      count={10}
      variant="outlined"
      shape="rounded"
      className="page-numbers"
    />
  );
};

export default PageNumbers;
