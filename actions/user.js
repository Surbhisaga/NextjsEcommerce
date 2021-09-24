export const SIGN_UP_USER_START = "SIGN_UP_USER_START";

export const signUpUserStart = userCredentials => ({
    type: userTypes.SIGN_UP_USER_START,
    payload: userCredentials
})
