
export function UnAuthorized(code){

}

export function SetEmail(email){
    sessionStorage.setItem("email",email)
}

export function GetEmail(email){
    return sessionStorage.getItem("email")
}