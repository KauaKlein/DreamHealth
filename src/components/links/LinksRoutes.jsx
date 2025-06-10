import { Link } from "react-router-dom"

export const LinksRoutes = () =>{
    return(
        <div>
            <Link to="/login">login</Link>
            <Link to="/cadastro">cadastro</Link>
            <Link to="/dashBoard">DashBoard</Link>
        </div>
    )
}