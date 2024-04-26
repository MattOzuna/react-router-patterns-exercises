import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
const ColorList = () => {
  const [Colors, setColors] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    if (state) setColors((Colors) => ({ ...Colors, ...state }));
  }, []);

  return (
    <div>
      <Link to="/colors/form">Add a color?</Link>
    </div>
  );
};

export default ColorList;
