import { object } from "prop-types";

export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'toggle_favorite':

      const { uid, name, type } = action.payload //draw uid from url to avoid grabbing both character and planet of the same uid, unecessary deconstruction
      const isFavorited = store.favorites.some((object) => object.type === type && object.uid === uid) //checks if the payload (indiv. object) is favorited. Didn't like getting the object, had to be more specific (inside object parenthesis)

      return {
        ...store,
        favorites: isFavorited ? store.favorites.filter((object) => object.id !== action.payload.id) : [...store.favorites, action.payload]
      };
    
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
