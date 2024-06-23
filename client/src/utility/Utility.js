
export function UnAuthorized(code){
    if(code===401){
        sessionStorage.clear()
        localStorage.clear()
        window.location.href="/login"
    }
}

export function SetEmail(email){
    sessionStorage.setItem("email",email)
}

export function GetEmail(email){
    return sessionStorage.getItem("email")
}