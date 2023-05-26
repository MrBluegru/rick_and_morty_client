import { cardProps } from "../../ts/types";
import styles from './card.module.css'

export default function Card({ image, name, origin, species }: cardProps) {
  return (
    <div className={styles.card} key={name}>
      <div className="name">
        <h1>{name}</h1>
      </div>

      <div className={styles.imagen}>
        <img src={image} alt={`Imagen de ${name}`} />
      </div>

      <div className="details">
        <h2>Especie: {species}</h2>
        <h3>Origen: {origin}</h3>
      </div>
    </div>
  );
}
