import { Outlet } from "react-router-dom"
import { NavMenu } from "./NavMenu"

export const Layout = () =>{
    return(
        <div>
            <NavMenu/>

            <main>
                <Outlet/>
            </main>

            {/* implementação do footer */}
        </div>
    )
}