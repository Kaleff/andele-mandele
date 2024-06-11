import { useEffect, useState } from "react";
import { CharacterType, EpisodeType, PlacesType } from "../types/types";
import { Link, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { getCharacter } from "../network/network";

export default function Character() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<CharacterType>();
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [places, setPlaces] = useState<PlacesType>();

  useEffect(() => {
    const characterId = id ? parseInt(id) : 0;
    getCharacter(characterId)
      .then((response) => {
        setLoading(false);
        setEpisodes(response.data.episodes);
        setCharacter(response.data.character);
        setPlaces({
          origin: response.data.origin,
          location: response.data.location
        });
      })
      .catch((err) => {
        setCharacter(undefined);
        setEpisodes([]);
        console.error(err);
      })
  }, []);

  const episodeList = episodes.map((episode: EpisodeType) => (
    <div className="col-lg-6 mb-5" key={episode.id}>
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <i className="bi bi-collection"></i>
          </div>
          <h2 className="fs-4 fw-bold">{episode.name}</h2>
          <Link to={`/episode/${episode.id}`} relative="path">{episode.episode}</Link>
          <p className="mb-0">
            {episode.air_date}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            {loading && (
              <div className="imgHolder">
                <BarLoader loading={loading} color="#3378A7" />
              </div>
            )}
            {character && (
              <>
                <h2 className="display-5 fw-bold">{character.name}</h2>
                <div className="imgHolder pt-4">
                  <img src={character.image} />
                </div>
                <p className="fs-4 pt-4">{character.status} - {character.species}</p>
                <p className="fs-4 pt-4">{character.gender}</p>
                <p className="fs-4 pt-4">{character.type}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fs-4 pt-4">Last known location: {places?.location ? places.location.name : 'Unknown'}</p>
                    {places?.location && <>
                      <p className="fs-4 pt-4">Type: {places.location.type}</p>
                      <p className="fs-4 pt-4">Dimension: {places.location.dimension}</p>
                    </>}
                  </div>
                  <div className="col-lg-6">
                    <p className="fs-4 pt-4">Origin: {places?.origin ? places.origin.name : 'Unknown'}</p>
                    {places?.origin && <>
                      <p className="fs-4 pt-4">Type: {places.origin.type}</p>
                      <p className="fs-4 pt-4">Dimension: {places.origin.dimension}</p>
                    </>}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="container px-lg-5 pt-4">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <h2>Episodes starred in:</h2>
        </div>
      </div>
      {episodes && (
        <div className="container px-lg-5 pt-5">
          <div className="row gx-lg-5">{episodeList}</div>
        </div>
      )}
    </header>
  );
}
