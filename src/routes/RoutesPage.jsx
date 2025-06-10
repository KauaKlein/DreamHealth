import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { CadastroPage } from "../pages/CadastroPage";
import { DashBoardPage } from "../pages/DashBoardPage";

export const RoutesPage = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/cadastro" element={<CadastroPage/>}/>
                    <Route path="/dashBoard" element={<DashBoardPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );

}