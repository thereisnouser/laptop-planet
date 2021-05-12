import {
  React, Grid, Container, ShopItemInt, ShopItem,
} from '../../imports';

const ShopList: React.FC<any> = (props: any) => {
  const { itemsList, showMoreInfoToggler } = props;

  return (
    <Container>
      <Grid container spacing={2}>
        {
          itemsList.map((item: ShopItemInt) => (
            <ShopItem
              {...item}
              showMoreInfoToggler={(id: number) => showMoreInfoToggler(id)}
            />
          ))
        }
      </Grid>
    </Container>
  );
};

export default ShopList;
