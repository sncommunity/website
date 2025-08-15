import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-nepaliBlue text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="font-bold text-lg">Strathfield Nepalese Community</span>
        </div>
        <div className="hidden md:flex gap-6">
          {["hero", "about", "activities", "events", "board", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-nepaliRed"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
