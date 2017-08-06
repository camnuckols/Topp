const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';

const voteReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case VOTE_UP:
            return state.votes + 1;
        case VOTE_DOWN:
            return state.votes - 1;
        default:
            return state;
    }
};