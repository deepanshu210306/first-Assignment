import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="https://maitriglobaleducation.com/public/img/logo/small.png" alt="Maitri Global Education Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>More</li>
      </ul>
    </nav>
  );
};

export default Navbar;