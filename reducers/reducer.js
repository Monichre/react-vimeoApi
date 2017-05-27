import actions from '../actions/actions.js';

export const videos = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case 'REQUEST_VIDEOS':
            return action.data
        default:
            return state
        }

}
