import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div className="movies-container">
        <div>
          <h2>Tela listagem de filmes</h2>
        </div>
        <div className="movies-list-container">
          <div>
            <Link to="/movies/1">Acessar /movies/1</Link>
          </div>
          <div>
            <Link to="/movies/2">Acessar /movies/2</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
