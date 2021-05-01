const initialState = {
    albums: [],
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'albums/load/start':
            return {
                ...state,
                loading: true
            }

        case 'albums/load/success':
            return {
                ...state,
                albums: action.payload,
                loading: false
            }


        default:
            return state;
    }
}