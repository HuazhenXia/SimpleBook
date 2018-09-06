import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS){
        return state.set('focused', true)
    }else if(action.type === actionTypes.SEARCH_BLUR){
        return state.set('focused', false)
    }
    return state;
}
