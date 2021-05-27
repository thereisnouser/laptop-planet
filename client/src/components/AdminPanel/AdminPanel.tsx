import {
  React, DataGrid, getProductsList,
} from '../../imports';

const AdminPanel: React.FC = (): React.ReactElement => {
  const products = getProductsList();
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
    },
    {
      field: 'title',
      headerName: 'Title',
      type: 'string',
      width: 300,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      type: 'string',
      flex: 1,
      editable: true,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'image',
      headerName: 'Img',
      type: 'string',
      width: 300,
      editable: true,
    },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={products}
      hideFooter
      showCellRightBorder
      autoHeight
    />
  );
};

export default AdminPanel;
