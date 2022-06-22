const initialState = {} ;
const userDetails =(state=initialState , action )=>{
    switch (action.type){
        case "TRUE" : 
        return {UId:action.user.UId,
            UserName:action.user.UserName,
            RoleId:action.user.RoleId
        };
        case "FALSE" : return state;
        default: return state;
    }

}

export default userDetails;