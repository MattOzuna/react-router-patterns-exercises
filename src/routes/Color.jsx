import { useParams } from "react-router-dom";

const Color = () => {
  const {color} = useParams()
  return <div>{color}</div>;
};

export default Color;
