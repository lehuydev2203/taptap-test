import {loadItem, addItem, removeItem, clearList,update} from './sliceTodo';

export const GlobalActions = {
  todo: {
    update:update,
    list: loadItem,
    add: addItem,
    remove: removeItem,
    clear: clearList,
  },
};
