const POST = 'POST';
const COMMENT_DATA = 'COMMENT_DATA';

const initiState = {
    data: [],
    commentData: []
}

const addingData = (state = initiState, action) => {

    switch (action.type) {

        case POST:
            //console.log(state, action)
            return {
                ...state,
                data: [...state.data, action.all]
            }

            case COMMENT_DATA:
                 console.log(state, action);
                 
                return {
                    ...state,
                    commentData: [...state.commentData, action.all]
                }

        default:
            return state
    }
}
export default addingData