import { Outlet } from "react-router-dom";
import GlobalStyles from "../styled/global";
import NavBar from "./navbar";

export default function Layout(){

    return (
        <main>
        <GlobalStyles />
            <NavBar />
            <div><Outlet /></div>
        </main>

    )
}