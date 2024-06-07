const RecommendedMovies = styled.div`
  color: ${(props) => props.theme.white.darker};
  margin-top: 20px;
  padding: 20px;
  padding-top: 0px;
  width: 1620px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  span {
    margin-top: 10px;
    text-align: center;
  }
`;

const Related = ({ recommends, movieId }: RecommendsProps) => {
  return (
    <RecommendMovies>
      {movieRecommendations.length > 0 ? (
        movieRecommendations.map((movie, index) => (
          <MovieCardCard key={index}>
            <img src={makeImagePath(movie.backdrop_path)} alt={movie.title} />
            <span>{movie.title}</span>
          </MovieCardCard>
        ))
      ) : (
        <div>No recommendations available!</div>
      )}
    </RecommendMovies>
  );
};

export default Related;
