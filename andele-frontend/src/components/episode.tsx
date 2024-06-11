import { useEffect, useState } from "react";
import { getEpisode } from "../network/network";
import { useParams } from "react-router-dom";
import { CharacterType, EpisodeType } from "../types/types";
import { BarLoader } from "react-spinners";

export default function Episode() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [episode, setEpisode] = useState<EpisodeType>();

  useEffect(() => {
    const episodeId = id ? parseInt(id) : 0;
    getEpisode(episodeId)
      .then((response) => {
        setLoading(false);
        setCharacters(response.data.characters);
        setEpisode(response.data.episode);
      })
      .catch((err) => {
        setCharacters([]);
        setEpisode(undefined);
        console.error(err);
      });
  }, []);

  const characterList = characters.map((character: CharacterType) => (
    <div className="col-lg-6 mb-5" key={character.id}>
      <div className="card bg-light border-0 h-100">
        <div className="imgHolder pt-4">
          <img src={character.image} />
        </div>
        <div className="card-body text-center px-4 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <i className="bi bi-collection"></i>
          </div>
          <h2 className="fs-4 fw-bold">{character.name}</h2>
          <p>
            {character.status} - {character.species}
          </p>
          <p>{character.gender}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              {loading && (
                <div className="imgHolder">
                  <BarLoader loading={loading} color="#3378A7" />
                </div>
              )}
              {episode && (
                <>
                  <h2 className="display-5 fw-bold">{episode.name}</h2>
                  <p className="fs-4 pt-4">{episode.air_date}</p>
                  <p className="fs-4 pt-4">{episode.episode}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="container px-lg-5 pt-4">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <h2>Characters starred:</h2>
          </div>
        </div>
        {characters && (
          <div className="container px-lg-5 pt-5">
            <div className="row gx-lg-5">{characterList}</div>
          </div>
        )}
      </header>
    </>
  );
}
