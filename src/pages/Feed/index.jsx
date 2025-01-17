import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { obterPets } from "../../api/api";
import "./styles.scss";

const filtrosPadrao = {
  pagina: 1,
  porPagina: 10,
  especie: null,
  sexo: null,
  porte: null,
};

export function Feed() {
  const [pets, setPets] = useState([]);
  const [carregarMais, setCarregarMais] = useState(true);
  const [filtros, setFiltros] = useState(filtrosPadrao);

  useEffect(() => {
    popularLista();
  }, [filtros]);

  const popularLista = () => {
    const dados = obterPets(filtros);

    if (!dados) return;

    setPets((pets) => [...pets, ...dados.pets]);
    if (dados.totalPaginas <= filtros.pagina) {
      setCarregarMais(false);
    }
  };

  const carregarProximaPagina = () => {
    if (carregarMais) {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        pagina: prevFiltros.pagina + 1,
      }));
    }
  };

  const onChangeFiltros = (e) => {
    const { name, value } = e.target;
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [name]: value || null,
      pagina: 1,
    }));
    setPets([]);
    setCarregarMais(true);
  };

  return (
    <div className="feed">
      <header>
        <h1>Feed de Pets</h1>
        <div>
          <label>
            Categoria:
            <select
              name="especie"
              value={filtros.especie || ""}
              onChange={onChangeFiltros}
            >
              <option value="">Todos</option>
              <option value="CAO">Cães</option>
              <option value="GATO">Gatos</option>
            </select>
          </label>

          <label>
            Sexo:
            <select
              name="sexo"
              value={filtros.sexo || ""}
              onChange={onChangeFiltros}
            >
              <option value="">Todos</option>
              <option value="M">Macho</option>
              <option value="F">Fêmea</option>
            </select>
          </label>

          <label>
            Porte:
            <select
              name="porte"
              value={filtros.porte || ""}
              onChange={onChangeFiltros}
            >
              <option value="">Todos</option>
              <option value="P">Pequeno</option>
              <option value="M">Médio</option>
              <option value="G">Grande</option>
            </select>
          </label>
        </div>
      </header>

      <main>
        {pets.length && pets.map((pet) => <Card key={pet.id} pet={pet} />)}
      </main>

      <footer>
        {carregarMais && (
          <button onClick={carregarProximaPagina}>Carregar mais</button>
        )}
      </footer>
    </div>
  );
}
