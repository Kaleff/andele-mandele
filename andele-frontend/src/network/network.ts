import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL : "http://localhost/api";

export function getEpisodes(page: number) {
  return axios({
    method: 'get',
    url: `${baseUrl}/episodes/${page}`,
  })
}

export function getEpisode(id: number) {
  return axios({
    method: 'get',
    url: `${baseUrl}/episode/${id}`,
  })
}

export function getCharacters(page: number) {
  return axios({
    method: 'get',
    url: `${baseUrl}/characters/${page}`
  })
}

export function getCharacter(id: number) {
  return axios({
    method: 'get',
    url: `${baseUrl}/character/${id}`
  })
}