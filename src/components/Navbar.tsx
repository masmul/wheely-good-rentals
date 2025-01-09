import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">RentalKu</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/cars" className="text-gray-700 hover:text-primary">Mobil</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">Kontak</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};