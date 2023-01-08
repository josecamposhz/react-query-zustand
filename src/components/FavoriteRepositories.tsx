import { Card } from "./Card";
import { useFetchRepositories } from "../hooks/useFetchRepositories";
import { useFavoriteRepositoriesStore } from "../store";

export const FavoriteRepositories = ({ user }: { user: string }) => {
  const { data, isLoading, isError } = useFetchRepositories(user);
  const favorites = useFavoriteRepositoriesStore((state) => state.favorites);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Usuario no encontrado</div>;

  return (
    <section className="repositories-section">
      {data?.map((repository) => (
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favorites.includes(repository.id)}
        />
      ))}
    </section>
  );
};
