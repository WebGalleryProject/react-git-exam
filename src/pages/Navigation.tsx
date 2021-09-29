import { Link } from "react-router-dom";
import { RouteNames } from "../routes/types";

const Navigation = () => {
  return (
    <header style={{ height: "50px", backgroundColor: "lightgrey" }}>
      Navigation
      <Link to={RouteNames.MAIN}>
        <button>Main</button>
      </Link>
      <Link to={RouteNames.MOCK_PAGE}>
        <button>Mock</button>
      </Link>
    </header>
  );
};

export default Navigation;
