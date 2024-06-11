import { useEffect, useState } from "react";
import { getEpisode } from "../network/network";
import { EpisodeType } from "../types/types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);

  function getEpisodesData() {
    getEpisode(index)
      .then((response) => {
        console.log(response.data);
        setEpisodes(episodes.concat(response.data));
        response.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setIndex(index + 1);
  }

  useEffect(() => {
    getEpisodesData();
  }, []);

  const episodeList = episodes.map((episode: EpisodeType) => (
    <div className="col-lg-6 mb-5">
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <i className="bi bi-collection"></i>
          </div>
          <h2 className="fs-4 fw-bold">{episode.name}</h2>
          <p className="mb-0">
            {episode.episode}
          </p>
          <p className="mb-0">
            {episode.air_date}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <InfiniteScroll
      dataLength={episodeList.length}
      hasMore={hasMore}
      next={getEpisodesData}
      loader={<></>}
    >
      {episodes && (
        <div className="container px-lg-5 pt-5">
          <div className="row gx-lg-5">
            {episodeList}
          </div>
        </div>
      )}
    </InfiniteScroll>
  );
}
