import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { getCharacters } from "../../redux/action";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { characters, unalterableCharacters } = useSelector(
    (state: any) => state.character
  );

  useEffect(() => {
    if (!unalterableCharacters.length) {
      dispatch(getCharacters());
    }
  }, [dispatch, unalterableCharacters]);

  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Personajes</h1>
      </div>

      {/* <NavBar /> */}

      <div>
        {characters.map((e: any) => {
          return (
            <Card
              key={e.name}
              image={e.image}
              name={e.name}
              origin={e.origin}
              species={e.species}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
