import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import CabinTwoToneIcon from "@mui/icons-material/CabinTwoTone";
import LaptopChromebookTwoToneIcon from "@mui/icons-material/LaptopChromebookTwoTone";
import HeadsetMicTwoToneIcon from "@mui/icons-material/HeadsetMicTwoTone";
import DesktopMacTwoToneIcon from "@mui/icons-material/DesktopMacTwoTone";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img
            className="logo"
            src="https://res.cloudinary.com/dkkwppueg/image/upload/v1728355319/alef-logo_cxrxbg.jpg"
            alt="alef electronics logotipo"
          />
          <h1>Alef-Computers</h1>
        </div>
        <ul className="categories">
          <li>
            <a href="">
              <CabinTwoToneIcon />
              Inicio
            </a>
          </li>
          <li>
            <a href="">
              <LaptopChromebookTwoToneIcon />
              Computadoras
            </a>
          </li>

          <li>
            <a href="">
              <HeadsetMicTwoToneIcon />
              Accesorios
            </a>
          </li>
          <li>
            <a href="">
              <DesktopMacTwoToneIcon />
              Monitores
            </a>
          </li>
          <a href="">
            <CartWidget />
          </a>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
