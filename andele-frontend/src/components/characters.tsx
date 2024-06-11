import { useEffect, useState } from "react";
import { CharacterType } from "../types/types";
import { getCharacters } from "../network/network";
import InfiniteScroll from "react-infinite-scroll-component";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);

  function getCharactersData() {
    getCharacters(index)
      .then((response) => {
        setCharacters(characters.concat(response.data));
        response.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setIndex(index + 1);
  }

  useEffect(() => {
    getCharactersData();
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
          <h2 className="fs-4 fw-bold"><Link to={`/character/${character.id}`}>{character.name}</Link></h2>
          <p>
            {character.status} - {character.species}
          </p>
          <p>{character.gender}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <InfiniteScroll
      dataLength={characterList.length}
      hasMore={hasMore}
      next={getCharactersData}
      loader={<BarLoader loading={true} color="#3378A7" />}
    >
      {characters && (
        <div className="container px-lg-5 pt-5">
          <div className="row gx-lg-5">{characterList}</div>
        </div>
      )}
    </InfiniteScroll>
  );
}
