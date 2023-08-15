import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
}

interface Options {
  height: string;
  width: string;
}
// Tato komponenta přijímá jako props videoId a vytvoří YouTube přehrávač pro dané video
  // Vracíme komponentu, která zahrnuje přehrávač YouTube

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
 
 // Definujeme možnosti pro náš YouTube přehrávač
  const opts: Options = {
    height: '100%',
    width: '100%',
  };

  return (
    <div style={{position: 'relative', height: '75vh', width: '100%', overflow: 'hidden'}}>
      <YouTube videoId={videoId} opts={opts} style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} />
    </div>
  );
};

export default YouTubePlayer;
