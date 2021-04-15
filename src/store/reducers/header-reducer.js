import * as types from '../../actions/action-types';


const initialState = {
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA_HEADER:
            return {
                ...action.payload
            }
       
        default:
            return { ...state };
    }
};

export default headerReducer;