import {
  SAVE_DATA_ITEMS,
  SAVE_SINGLE_DATA_ITEM,
} from "../actions/saveDataAction";

const saveDataItemsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SAVE_DATA_ITEMS:
    case SAVE_SINGLE_DATA_ITEM:
      return { data: payload };
    default:
      return state;
  }
};

export default saveDataItemsReducer;
