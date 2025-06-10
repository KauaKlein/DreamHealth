import { Link } from "react-router-dom"
import { LinksRoutes } from "../links/LinksRoutes"

export const NavMenu = () =>{
    return(
        <div>
            <Link to="/"><h1>nav</h1></Link>

            <LinksRoutes/>
        </div>
    )
}