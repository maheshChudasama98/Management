const initialState = {
    token: null,
    email: null,
    userRole: null,
};

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return {
                ...state,
                userDetails: action.payload,
            };
        default:
            return state;
    }
};

export default authReducers;
