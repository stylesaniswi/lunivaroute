const initialState = false ;
const userlog =(state=initialState , action )=>{
    switch (action.type){
        case "TRUE" : return true;
        case "FALSE" : return false;
        default: return state;
    }

}

export default userlog;