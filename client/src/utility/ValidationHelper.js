class ValidationHelper{
    static IsEmail(value){
        let EmailRegX=/\S+@\S+\.\S+/
        return EmailRegX.test(value)
    }

    static IsOtp(value){
        return value.length===6
    }
}
export default ValidationHelper