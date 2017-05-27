function REQUEST_VIDEOS(){
    const action = {
        type:'REQUEST_VIDEOS'
    }
}
function RECEIVE_VIDEOS(data){
    const action = {
        type: 'RECEIVE_VIDEOS',
        data
    }
}
export const sendRequestVideosDispatch = () => dispatch(REQUEST_VIDEOS());
export const sendReceiveVideosDispatch = (data) => dispatch(RECEIVE_VIDEOS(data));
