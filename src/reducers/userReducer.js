
const userReducer = (state = {
    ID: 0,
    Email: "",
    FullName: "",
    CompanyName: 0,
    Password: "",
}, action) => {
    
    switch(action.type){
        case "REGISTER_USER_FULFILLED":
            var UserData = action.payload.data;
            let EmailID =  action.payload.Email;
            var IsExists = 0;
            
            for(var item in UserData){
                if(EmailID === UserData[item]['Email']){
                    IsExists = 1;
                    break;
                }
            };            
            if(!IsExists){
                state = {
                    ...state,
                    ID: action.payload.ID,
                    Email: action.payload.Email,
                    FullName: action.payload.FullName,
                    CompanyName: action.payload.CompanyName,
                    Password: action.payload.Password,
                    ResponseMessage: "Registration Success!",
                    ResponseCode: "SUCCESS"
                }
            }
            else{
                state = {
                    ...state,
                    Email: action.payload.Email,
                    ResponseMessage: "Registration Failure!",
                    ResponseCode: "FAILURE"
                }
            }
            return state;            
            break;
        default:
            break;
    }
    return state;
};

export default userReducer;