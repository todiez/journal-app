import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Journal App</h1>
      <div className="links">
        <Link to="/">Home</Link>

        <Link to="/class-overview">Class Overview</Link>
        <Link
          to="/create"
          style={
            //Outer curly braces: tell react that its a dynamic value
            {
              //Inner curly braces: JS Object
              color: "white",
              backgroundColor: "blue",
              borderRadius: "18px",
            }
          }
        >
          Add New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
