import UserContextProvider from "../../Context/userContextProvider";
import { Login, Profile } from "./Test3";


export function Test4() {
    return(
    <div>
        <UserContextProvider>
            <Login/>
            <Profile/>
        </UserContextProvider>
        
    </div>
    )
}