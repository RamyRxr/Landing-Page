import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/users/React.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <header className="relative flex items-center justify-between px-5 py-3 bg-transparent z-50">
      <a href="#" className="flex items-center text-2xl font-semibold text-cyan-500 no-underline">
        <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
        Ramy
      </a>

      <nav className="hidden lg:flex space-x-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative text-xl font-bold text-[#175f8f] px-5 hover:text-cyan-500 transition duration-500"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex space-x-6">
        <a href="#" className="btn-outline">Log in</a>
        <a href="#" className="btn-gradient">Create Account</a>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleNavbar} className="text-cyan-500">
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed inset-0 bg-neutral-900 p-6 z-20 flex flex-col">
          <button onClick={toggleNavbar} className="self-end text-cyan-500">
            <X />
          </button>
          <ul className="mt-4 space-y-4 text-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-lg font-medium text-[#bef] hover:text-cyan-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
