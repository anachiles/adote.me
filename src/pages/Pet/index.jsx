import { useParams, useNavigate } from "react-router-dom";
import { obterPet } from "../../api/api";
import "./styles.scss";

export const Pet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = obterPet(id);

  if (!pet) {
    return (
      <div className="pet-profile">
        <h1>Pet não encontrado</h1>
        <button className="button" onClick={() => navigate(-1)}>
          voltar
        </button>
      </div>
    );
  }

  const mensagemWhatsapp = encodeURIComponent(
    `Oi, estou interessado(a) em adotar ${pet.nome || "este pet"}!`
  );
  const linkWhatsapp = `https://wa.me/${pet.contato}>?text=${mensagemWhatsapp}`;

  return (
    <div className="pet-profile">
      <h1>
        Conheça <strong>{pet.nome || "esse pet"}</strong>
      </h1>
      <img src={pet.foto} alt={pet.nome || "Pet"} />
      <div className="details">
        <p>
          <strong>Espécie:</strong> {pet.especie === "CAO" ? "Cão" : "Gato"}
        </p>
        <p>
          <strong>Sexo:</strong> {pet.sexo === "M" ? "Macho" : "Fêmea"}
        </p>
        <p>
          <strong>Idade:</strong> {pet.idade} ano(s) de idade
        </p>
        <p>
          <strong>Tamanho:</strong>{" "}
          {pet.porte === "P"
            ? "Pequeno"
            : pet.porte === "M"
            ? "Médio"
            : "Grande"}
        </p>
        <p>
          <strong>Descrição:</strong>{" "}
          {pet.descricao || "No description available"}
        </p>
        {pet.alergias && (
          <p>
            <strong>Alergias:</strong> {pet.alergias}
          </p>
        )}
        {pet.importante && (
          <p>
            <strong>Observações importantes:</strong> {pet.importante}
          </p>
        )}
      </div>
      <div className="actions">
        <button className="button" onClick={() => navigate(-1)}>
          Voltar
        </button>
        <a
          href={linkWhatsapp}
          className="button"
          style={{ backgroundColor: "#25D366", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar via WhatsApp
        </a>
      </div>
    </div>
  );
};
