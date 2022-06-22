import userlog from "./userlog";
import userDetails from "./userDetails";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    userStatus:userlog,
    user:userDetails
    
})

export default rootReducer;