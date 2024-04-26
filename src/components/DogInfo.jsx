import { v4 as uuidv4 } from "uuid";

const DogInfo = ({ name, age, src, facts }) => {
  return (
    <>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>
        <img src={src} alt={name} />
      </div>
      <div>Fun Facts!</div>
      <ul>
        {facts.map((fact) => (
          <li key={uuidv4()}>{fact}</li>
        ))}
      </ul>
    </>
  );
};

export default DogInfo;
