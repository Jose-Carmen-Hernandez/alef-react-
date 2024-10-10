//import { FaOpencart } from "react-icons/fa";
import "./cartWidget.css";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
const CartWidget = () => {
  return (
    <div className="cart">
      {/* <FaOpencart className="cart-icon/> */}
      <span>0</span>
      <ShoppingCartTwoToneIcon fontSize="large" />
    </div>
  );
};

export default CartWidget;
