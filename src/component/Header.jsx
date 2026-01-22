import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-[#f8f5f0] border-b border-[#caa36a]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {" "}
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Logo */}{" "}
          <div className="text-2xl font-serif text-black tracking-wide">
            {" "}
            PLANIVO GLOBAL{" "}
          </div>{" "}
          {/* Desktop Navigation */}{" "}
          <nav className="hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase">
            {" "}
            <a className="text-[#caa36a]">Home</a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              About
            </a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              Services
            </a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              Portfolio
            </a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              Contact
            </a>{" "}
          </nav>{" "}
          {/* CTA */}{" "}
          <div className="hidden md:block">
            {" "}
            <button className="bg-[#2b2a28] text-white px-7 py-3 text-xs tracking-widest hover:bg-[#caa36a] transition">
              {" "}
              GET IN TOUCH{" "}
            </button>{" "}
          </div>{" "}
          {/* Mobile Menu Button */}{" "}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black"
          >
            {" "}
            ☰{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Mobile Menu */}{" "}
      {open && (
        <div className="md:hidden bg-[#f8f5f0] px-6 pb-6">
          {" "}
          <nav className="flex flex-col space-y-4 text-sm tracking-widest uppercase">
            {" "}
            <a className="text-[#caa36a] cursor-pointer"> Home </a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              {" "}
              About{" "}
            </a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              {" "}
              Services{" "}
            </a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              {" "}
              Portfolio{" "}
            </a>{" "}
            <a className="text-gray-600 hover:text-black transition cursor-pointer">
              {" "}
              Contact{" "}
            </a>{" "}
            <button className="mt-4 bg-[#2b2a28] text-white py-3 tracking-widest hover:bg-[#caa36a] transition">
              {" "}
              GET IN TOUCH{" "}
            </button>{" "}
          </nav>{" "}
        </div>
      )}{" "}
    </header>
  );
};
export default Header;
