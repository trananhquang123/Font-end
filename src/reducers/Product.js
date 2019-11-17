import *as Types from './../constrains/ActionType';


var initialState = [];

var findIndex = (id, products) => {
    var result = -1;
    products.forEach((product, index) => {
        if (id === product.id) {
            result = index;
        }
    });

    return result;
}

const products = (state = initialState, action) => {
    var index = -1;

    var id = action.id;
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return state;
        case Types.DELETE_PRODUCT:
            index = findIndex(id, state);
            console.log(index);
            state.splice(index, 1);
            console.log(state);
            return [...state];
        default: return [...state];
    }
};

export default products;