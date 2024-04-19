import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-400 px-5 uppercase sm:px-7">
      <Link to="/">
        <img src="/Logo.png" alt="" className="h-[80px] w-[290px]" />
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
