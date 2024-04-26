import { useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DogInfo from "../components/DogInfo";

const Dogs = ({ dogs, names }) => {
  const { pup } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!names.includes(pup)) Navigate("/dogs");
  }, []);

  if (!pup) {
    return (
      <div className="Dog-Card">
        {dogs.map(({ name, age, src, facts }) => {
          return (
            <div key={uuidv4()}>
              <DogInfo name={name} age={age} src={src} facts={facts} />
            </div>
          );
        })}
      </div>
    );
  } else if (names.includes(pup)) {
    let idx = names.indexOf(pup);
    return (
      <div>
        <DogInfo
          name={dogs[idx].name}
          age={dogs[idx].age}
          src={dogs[idx].src}
          facts={dogs[idx].facts}
        />
      </div>
    );
  }
};

export default Dogs;
