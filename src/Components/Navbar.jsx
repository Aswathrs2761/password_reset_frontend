import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Password Reset</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">
          Login
        </Link>
        <Link to="/register" className="hover:text-blue-400">
          Register
        </Link>
        <Link to="/forgot-password" className="hover:text-blue-400">
          Forgot Password
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
