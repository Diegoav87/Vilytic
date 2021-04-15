import React, { useLayoutEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const VideoStats = (props) => {
  const [video, setVideo] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
    sendId(props.id);
  }, []);

  const sendId = () => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/comparer/video-id?id=${props.id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      })
      .then((data) => {
        setLoading(false);
        setVideo(data);
        console.log(data);
      });
  };

  return (
    <div>
      {error ? (
        <div className="alert alert-danger mt-2" role="alert">
          Video not found.
        </div>
      ) : null}
      {loading ? <Spinner /> : null}
      {video && !error ? (
        <ul className="list-group mt-4 mb-4">
          <li className="list-group-item p-4">
            <img className="m-auto" src={video.thumbnail} />
            <div className="mt-4 mb-4">
              <h5>{video.title}</h5>
            </div>
          </li>
          <li className="list-group-item">
            <p>Views - {video.stats.views}</p>
            <p>Likes- {video.stats.likes}</p>
            <p>Dislikes - {video.stats.dislikes}</p>
            <p>Comments - {video.stats.comments}</p>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default VideoStats;
