import axios from "axios";

export function getEpisode(page: number) {
  return axios({
    method: 'get',
    url: `http://localhost/api/episodes/${page}`,
  })
}