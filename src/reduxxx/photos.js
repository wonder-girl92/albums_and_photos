const initialState = {
    filter: "",
    photos: [],
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'photos/load/start':
            return {
                ...state,
                loading: true
            }

        case 'photos/load/success':
            return {
                ...state,
                photos: action.payload,
                loading: false
            }

        case 'filter/set':
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state;
    }
}