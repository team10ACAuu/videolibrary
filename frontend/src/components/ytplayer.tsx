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
    height: '100%',
    width: '100%',
  };

  return (
    <div style={{position: 'relative', height: '85vh', width: '100%', overflow: 'hidden'}}>
      <YouTube videoId={videoId} opts={opts} style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} />
    </div>
  );
};

export default YouTubePlayer;
