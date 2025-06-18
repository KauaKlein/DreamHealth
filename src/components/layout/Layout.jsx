import { Outlet } from "react-router-dom"
import { NavMenu } from "./NavMenu"

export const Layout = () =>{
    return(
        <div className="w-dvw h-dvh">
            <NavMenu/>

            <main className=" w-dvw h-[89%]">
                <Outlet/>
            </main>

            {/* implementação do footer */}
        </div>
    )
}