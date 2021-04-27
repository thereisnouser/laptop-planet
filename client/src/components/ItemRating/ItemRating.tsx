import {
  React,
} from '../../imports';
import './ItemRating.css';

const ItemRating: React.FC<any> = (props: any) => {
  const { rating } = props;

  const stars: Array<any> = [];

  for (let i = 0; i < 5; i++) { // remake in another branch (add material ui)
    if (i < rating) {
      stars.push(<span key={i} className="shop-item__star-gold" />);
    } else {
      stars.push(<span key={i} className="shop-item__star-empty" />);
    }
  }

  return (
    <div className="shop-item__rating">
      {stars}
    </div>
  );
};

export default ItemRating;
