

let initialState = {
    isLoggedIn: false,
    username: "",
    token: "",
    submitting: false,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                isLoggedIn: false,
                username: "",
                token: "",
                submitting: true,
            }

        case 'USER_LOGIN_SUCCEEDED':
            return {
                isLoggedIn: true,
                username: action.payload.username,
                token: action.payload.token,
                submitting: false,
            }

        case 'USER_LOGIN_FAILED':
            return {
                isLoggedIn: false,
                username: "",
                token: "",
                submitting: false,
            }

        default:
            return state
    }
}

export { authReducer }