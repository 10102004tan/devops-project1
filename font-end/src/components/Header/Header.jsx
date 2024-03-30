import logo from "../Assets/images/logo.png";
import userIcon from "../Assets/images/user-icon.png";
import shoppingCart from "../Assets/images/bag-icon.png";
import toggleIcon from "../Assets/images/toggle-icon.png";
import search from "../Assets/images/search-icon.png";

export default function Header(params) {
  const { isShow, setIsShowMenu } = params;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-[100%] h-[100vh] right-0 bottom-0 menu_left bg-[rgba(0,0,0,0.9)] z-10 ${
          isShow ? "active_menu" : ""
        }`}
      >
        <button
          className="absolute top-0 right-[25px] text-[36px] ml-[50px] text-white block"
          onClick={() => {
            setIsShowMenu(false);
          }}
        >
          ×
        </button>
        <div className="w-[100%] flex items-center justify-center gap-2 flex-col mt-[60px]">
          <a
            className="px-[8px] py-[4px] text-[20px] text-white inline-block nav_item"
            href="index.html"
          >
            Home
          </a>
          <a
            className="px-[8px] py-[4px] text-[20px] text-white inline-block nav_item"
            href="index.html"
          >
            Products
          </a>
          <a
            className="px-[8px] py-[4px] text-[20px] text-white inline-block nav_item"
            href="index.html"
          >
            About
          </a>
          <a
            className="px-[8px] py-[4px] text-[20px] text-white inline-block nav_item"
            href="index.html"
          >
            Client
          </a>
          <a
            className="px-[8px] py-[4px] text-[20px] text-white inline-block nav_item"
            href="index.html"
          >
            Contact
          </a>
        </div>
      </div>
      <script type="module" src=""></script>
      <div className="header px-4 py-4 flex items-center justify-between bg-[#fef4ec] relative">
        <button
          className="icon-menu"
          onClick={() => {
            setIsShowMenu(true);
          }}
        >
          <img src={toggleIcon} alt="" />
        </button>
        <div className="logo">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="action">
          <ul className="flex items-center gap-3">
            <li>
              <a href="#">
                <img src={userIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={shoppingCart} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={search} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
