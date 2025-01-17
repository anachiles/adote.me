import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import femaleIcon from "../../assets/female.png";
import maleIcon from "../../assets/male.png";
import rulerIcon from "../../assets/ruler.png";
import "./styles.scss";

export function Card({ pet }) {
  return (
    <Link to={`/pet/${pet.id}`} className="card">
      <img src={pet.foto} alt={pet.nome} />
      <div>
        <h1>{pet.nome}</h1>
        <div className="pills">
          <div className="pill">
            <img src={pet.sexo === "M" ? maleIcon : femaleIcon} />
            <h4>{`${pet.sexo === "M" ? "Macho" : "Fêmea"}`}</h4>
          </div>
          <div className="pill">
            <h4>{pet.idade} ano(s) de idade</h4>
          </div>
          <div className="pill">
            <img src={rulerIcon} />
            <h4>{`${
              pet.porte === "P"
                ? "Pequeno"
                : pet.porte === "M"
                ? "Médio"
                : "Grande"
            }`}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string,
    sexo: PropTypes.string,
    idade: PropTypes.number,
    porte: PropTypes.string,
    especie: PropTypes.string,
    foto: PropTypes.string,
  }),
};
