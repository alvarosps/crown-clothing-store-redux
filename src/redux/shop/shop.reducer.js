import ShopActionsTypes from './shop.types';
const INITAL_STATE = {
    collections: null
};

const shopReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;
