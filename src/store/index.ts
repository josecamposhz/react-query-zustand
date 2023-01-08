import create from "zustand";
import { persist } from "zustand/middleware";

type favoriteState = {
  favorites: number[];
  addRepository: (id: number) => void;
  removeRepository: (id: number) => void;
};

export const useFavoriteRepositoriesStore = create(
  persist<favoriteState>(
    (set) => ({
      favorites: [],
      addRepository: (id: number) => {
        set((state) => ({ favorites: [...state.favorites, id] }));
      },
      removeRepository: (id: number) => {
        set((state) => ({
          favorites: state.favorites.filter((repoId) => repoId !== id),
        }));
      },
    }),
    {
      name: "favorites-repositories",
    }
  )
);
