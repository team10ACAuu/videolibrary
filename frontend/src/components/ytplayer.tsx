import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
}

interface Options {
  height: string;
  width: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const opts: Options = {
    height: '280',
    width: '420',
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
