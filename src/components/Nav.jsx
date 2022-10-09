import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { navLinks } from "../data/data";
import Button from "../shared/Button";

const Nav = () => {
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow((prevState) => !prevState);
  }

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-8 px-2 relative">
        <div className="flex items-center gap-8">
          <img src={logo} alt="logo" className="w-24 object-cover" />
          <div className="space-x-4 hidden md:inline-block">
            {navLinks.map((link) => (
              <a
                href={link.id}
                key={link.id}
                className="text-base text-GrayishViolet font-semibold"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Button>login</Button>
          <Button version={true}>sign up</Button>
        </div>
        {/* side nav */}
        <FaHamburger
          className="block text-Gray cursor-pointer md:hidden"
          size={25}
          onClick={handleToggle}
        />
        {show && (
          <div className="w-full rounded-lg p-6 space-y-6 absolute top-[-70%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-DarkViolet md:hidden">
            <div className="flex items-center justify-center flex-col gap-6 border-b border-Gray pb-6">
              {navLinks.map((link) => (
                <a
                  href={link.id}
                  key={link.id}
                  className="text-base text-white font-semibold"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-center flex-col gap-4">
              <Button>login</Button>
              <Button version={true} width="w-full">
                sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
