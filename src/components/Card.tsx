import { Repository } from "../types";
import { useFavoriteRepositoriesStore } from "../store";

type Props = {
  repository: Repository;
  isFavorite: boolean;
};

export const Card = ({ repository, isFavorite }: Props) => {
  const addFavoriteRepo = useFavoriteRepositoriesStore(
    (state) => state.addRepository
  );
  const removeFavoriteRepo = useFavoriteRepositoriesStore(
    (state) => state.removeRepository
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
    } else {
      addFavoriteRepo(repository.id);
    }
  };

  return (
    <article className={`card ${isFavorite && 'favorite-repo'}`}>
      <h3>{repository.name}</h3>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </article>
  );
};
