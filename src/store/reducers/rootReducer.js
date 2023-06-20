
// state of redux -- not state of react

const initState = {
    users: [
        { id: 1, name: 'Hac' },
        { id: 2, name: 'tighostle' },
        { id: 3, name: 'tighostle with hac' },
    ]
}

const rootReducer = (state = initState, action) => {

    return state;
}

export default rootReducer;