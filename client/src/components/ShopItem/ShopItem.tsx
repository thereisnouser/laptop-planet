import {
  React, Grid, Button, Paper, Typography,
  ShopItemInt, ItemRating, trimDescription,
} from '../../imports';
import './ShopItem.css';

const ShopItem: React.FC<ShopItemInt> = (props: ShopItemInt) => {
  const {
    id, image, title, price, description, rating, showMoreInfoToggler,
  } = props;

  return (
    <Grid item key={id}>
      <Paper elevation={4} className="shop-item">
        <Grid container spacing={2}>
          <Grid item sm={3} xs={12}>
            <img className="shop-item__img" src={image} alt="img-1" />
          </Grid>
          <Grid item sm={9} xs={12} container direction="column" justify="space-around">
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6" className="shop-item__title" onClick={() => showMoreInfoToggler(id)}>
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="shop-item__price">
                  $
                  {price}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className="shop-item__description">
                {trimDescription(description)}
              </Typography>
            </Grid>
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <ItemRating rating={rating} />
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained">Add to cart</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ShopItem;
