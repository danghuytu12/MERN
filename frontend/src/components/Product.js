import "./Product.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NumberFormat from 'react-number-format';
const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">
        Giá sản phẩm: 
          <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'đ '} />
        </p>

        <Link to={`/product/${productId}`} className="info__button">
          <Button style={{ marginLeft: 105 ,marginTop:15}} variant="contained">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
