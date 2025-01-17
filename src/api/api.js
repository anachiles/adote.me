import dados from "./dados.json";

const filtrosPadrao = {
  pagina: 1,
  porPagina: 10,
  especie: null,
  sexo: null,
  porte: null,
};

export function obterPets(filtros = filtrosPadrao) {
  const { pagina, porPagina, especie, sexo, porte } = filtros;

  let petsFiltrados = dados.filter((pet) => {
    if (especie && pet.especie !== especie) {
      return false;
    }

    if (sexo && pet.sexo !== sexo) {
      return false;
    }

    if (porte && pet.porte !== porte) {
      return false;
    }

    return true;
  });

  const total = petsFiltrados.length;
  const inicio = (pagina - 1) * porPagina;
  const fim = inicio + porPagina;
  const petsPaginados = petsFiltrados.slice(inicio, fim);

  return {
    total,
    paginaAtual: pagina,
    porPagina,
    totalPaginas: Math.ceil(total / porPagina),
    pets: petsPaginados,
  };
}

export function obterPet(id) {
  const pet = dados.find((pet) => pet.id == id);

  return pet;
}
