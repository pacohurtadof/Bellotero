import * as types from '../../actions/action-types';

const initialState = {
    
}

const testimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA_TESTIMONIALS:
            return {
                ...action.payload
            }
       
        default:
            return { ...state };
    }
};

export default testimonialsReducer;