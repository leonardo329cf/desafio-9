import { useParams } from 'react-router-dom';
import Reviews from '../../components/Reviews';
import ReviewInsertCard from '../../components/ReviewInsertCard';
import { useState } from 'react';
import { isMember } from '../../util/auth';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [ refreshCounter, setRefreshCounter] = useState(0);

  const refresh = () => {
    setRefreshCounter(refreshCounter+1);
  }

  return (
    <div className="movie-detail-container">
      <div className="page-name-container">
        <h2>Tela detalhes do filme id: {movieId}</h2>
      </div>
      {isMember() && <ReviewInsertCard movieId={movieId} refresh={refresh}/>}
      <Reviews movieId={movieId} refresh={refreshCounter} />
    </div>
  );
};

export default MovieDetails;
