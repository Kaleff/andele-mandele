import axios from "axios";

export function getEpisodes(page: number) {
  return axios({
    method: 'get',
    url: `http://localhost/api/episodes/${page}`,
  })
}

export function getEpisode(id: number) {
  return axios({
    method: 'get',
    url: `http://localhost/api/episode/${id}`,
  })
}

export function getCharacters(page: number) {
  return axios({
    method: 'get',
    url: `http://localhost/api/characters/${page}`
  })
}

export function getCharacter(id: number) {
  return axios({
    method: 'get',
    url: `http://localhost/api/character/${id}`
  })
}