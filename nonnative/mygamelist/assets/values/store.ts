import {create} from "zustand"
import games from "@/assets/values/games";

interface GamesStore {
    games: Game[];
    addGame: (game: Game) => void;
    removeGame: (game: Game) => void;
    updateGame: (game: Game) => void;
}

export const useGames = create<GamesStore>((set) => ({
    games: games,
    addGame: (game) => set((state) => ({games: [...state.games, game]})),
    removeGame: (game) => set((state) => ({games: state.games.filter((inListGame) => inListGame.id !== game.id)})),
    updateGame: (game) => set((state) => ({games: state.games.map((inListGame) => inListGame.id === game.id ? {...inListGame, ...game} : inListGame)})),
}))