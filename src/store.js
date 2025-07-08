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
    case 'add_favorite':

      const { uid, name } = action.payload //draw uid from url to avoid grabbing both character and planet of the same uid

      return {
        ...store,
        favorites: [...store.favorites, { uid, name }]
      };
    case 'remove_favorite':

      const { uid } = action.payload //strange error here?

      return {
        ...store,
        favorites: store.favorites.filter
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
