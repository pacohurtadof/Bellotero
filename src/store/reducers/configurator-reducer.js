import * as types from '../../actions/action-types';


const initialState = {
    sliderType: "",
    dynamicsElements: []
}

const promotionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA_CONFIGURATOR:
            return {
                ...action.payload
            }
       
        default:
            return { ...state };
    }
};

export default promotionsReducer;