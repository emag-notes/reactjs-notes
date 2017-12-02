import * as React from 'react';
import VideoListItem from './VideoListItem';

interface Props {
  videos: any;
  onVideoSelect: (video: any) => void;
}

const VideoList = ({videos, onVideoSelect}: Props) => (
  <ul className="col-md-4 list-group">
    {videos.map(video =>
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    )}
  </ul>
);

export default VideoList;