import { Container } from '@material-ui/core';
import {
  React, Grid, ShopItemInt, ShopItem,
} from '../../imports';
import './ShopList.css';

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
