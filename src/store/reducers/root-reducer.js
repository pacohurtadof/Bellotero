  
import { combineReducers } from 'redux';
import testimonialsReducer from './testimonials-reducer';
import configuratorReducer from  './configurator-reducer';
import headerReducer from  './header-reducer';

const rootReducer = combineReducers({
    testimonials: testimonialsReducer,
    configurator: configuratorReducer,
    header: headerReducer

});

export default rootReducer;