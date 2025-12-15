import { Link } from "react-router-dom";

export const Movies = () => {
  return (
    <div>
      <h1>This is the main page</h1>

      <Link to="/movie/123">
        Go to movie details
      </Link>
    </div>
  );
};