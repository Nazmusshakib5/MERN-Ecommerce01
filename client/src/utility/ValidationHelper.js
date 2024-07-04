class ValidationHelper{
    static IsEmail(value){
        let EmailRegX=/\S+@\S+\.\S+/
        return EmailRegX.test(value)
    }

    static IsOtp(value){
        return value.length===6
    }

    static IsReviewEmpty(value){
        return value.length===0
    }
}
export default ValidationHelper