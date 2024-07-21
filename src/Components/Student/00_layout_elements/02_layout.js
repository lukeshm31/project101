import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./01_Common"




function Layout() {
    return (
        
        
        <div >
             
             <Header/>
                <div className="container" >
                    <Outlet  />
                </div>
            
            
          
        </div>
       
    )
}


export default Layout;