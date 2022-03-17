import { useParams } from "react-router-dom";

type UrlParams = {
    movieId: string;
  };

const MovieDetails = () => {
    const { movieId } = useParams<UrlParams>();

    return (
        <>
        <div className="page-name-container">
            <h2>Tela detalhes do filme</h2>
            <h2>id: {movieId}</h2>
        </div>
        </>
    );
};

export default MovieDetails;