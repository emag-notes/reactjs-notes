import * as React from 'react';

interface Props {
  video: any;
  onVideoSelect: (video: any) => void;
}

const VideoListItem = ({video, onVideoSelect}: Props) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li
      onClick={() => onVideoSelect(video)}
      className="list-group-item"
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;