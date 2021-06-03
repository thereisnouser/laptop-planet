import {
  React,
  useState,
  useEffect,
  useParams,
  Grid,
  Button,
  Paper,
  Typography,
  Rating,
  IShopItem,
  getProduct,
} from 'imports';
import './ShopItemFull.css';

export const ShopItemFull: React.FC = (): JSX.Element => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IShopItem>();

  useEffect(() => {
    async function fetch() {
      const response = await getProduct(Number(params.id));
      setProduct(response);
    }

    if (Number(params.id)) {
      fetch();
    }
  }, [params]);

  if (product) {
    return (
      <Grid item key={product.id}>
        <Paper elevation={4} className="shop-item-full">
          <Grid container justify="space-around">
            <Grid item>
              <img className="shop-item-full__img" src={product.image} alt="img-1" />
            </Grid>
            <Grid item md={6} xs={12} container direction="column" justify="space-around">
              <Grid item container justify="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="h5" className="shop-item-full__title">
                    {product.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" className="shop-item-full__price">
                    ${product.price}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="shop-item-full__description">{product.description}</Typography>
              </Grid>
              <Grid item container justify="space-between" alignItems="center">
                <Grid item>
                  <Rating name="read-only" value={product.rating} readOnly />
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained">
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  } else {
    return <h1>Nothing found</h1>;
  }
};
