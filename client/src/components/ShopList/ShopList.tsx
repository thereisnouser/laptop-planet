import {
  React, Grid, Container, ShopItemInt, ShopItem,
} from '../../imports';

const ShopList: React.FC<any> = (props: any) => {
  const { itemsList } = props;

  return (
    <Container>
      <Grid container spacing={2}>
        {
          itemsList.map((item: ShopItemInt) => (
            <ShopItem {...item} />
          ))
        }
      </Grid>
    </Container>
  );
};

export default ShopList;
