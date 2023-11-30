import MenuIcon from "../assets/images/icon-menu.svg?react";
import Logo from "../assets/images/logo.svg?react";
import CartIcon from "../assets/images/icon-cart.svg?react";
import Avatar from "../assets/images/image-avatar.png";

export default function Navbar() {
    return (
        <nav className="shadow-sm h-[74px] flex items-center px-6 justify-between">
            <div className="flex items-center">
                <MenuIcon className="mr-4" />
                <Logo />
            </div>
            <div className="flex items-center">
                <CartIcon className="text-dark-grayish-blue w-6 h-6" />
                <img
                    src={Avatar}
                    alt="avatar"
                    className="w-6 h-6 aspect-square rounded-full ml-6"
                />
            </div>
        </nav>
    );
}
