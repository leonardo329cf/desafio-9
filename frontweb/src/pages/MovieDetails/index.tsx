import { useParams } from 'react-router-dom';
import Reviews from '../../components/Reviews';


type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  
  return (
    <div>
      <div className="page-name-container">
        <h2>Tela detalhes do filme id: {movieId}</h2>
      </div>
      <Reviews movieId={movieId} />
    </div>
  );
};

export default MovieDetails;
