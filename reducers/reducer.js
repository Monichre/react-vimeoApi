import actions from '../actions/actions.js';

export const videos = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case 'RECEIVE_VIDEOS':
            return action.data
        default:
            return state
        }

}
