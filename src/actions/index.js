import * as Types from './../constrains/ActionType';
import callApi from './../util/CallerApi';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('api/product', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data.dtoProduct));
        });
    };
}

export const actDeleteProductsRequest = (id) => {
    return dispatch => {
        return callApi(`api/product/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id));
        });
        

    };
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('api/product/', 'POST', product).then(res => {
           
        });
        

    };
}


export const actFetchProducts = (products)=>{
    return {
        type:Types.FETCH_PRODUCT,
        products
    }
}

export const actDeleteProducts = (id)=>{
    return {
        type:Types.DELETE_PRODUCT,
        id
    }
}

// export const actAddProduct = (product)=>{
//     return {
//         type:Types.ADD_PRODUCT,
//         product
//     }
// }