const SIGNUP = "SIGNUP";
const LOGIN = "LOGIN";
const SIGNOUT_USER = "SIGNOUT_USER";
const signupUser = (data) => {
    return{
        type:SIGNUP,
        data
    }
}
const loginUser = (data) => {
    return{
        type:LOGIN,
        data
    }
}
const signoutUser = (data) => {
    return{
        type:SIGNOUT_USER,
        data
    }
}

// const signupUser = (obj) => ({type: "SIGNUP", data: obj});
// const loginUser = (obj) => ({type: "LOGIN", data: obj});
// const signoutUser = () => ({type: "SIGNOUT_USER"})

export {signupUser,loginUser,signoutUser}