import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { NavbarContainer, NavbarMain, NavLink, NavUnder } from "./Navbar.styles";

export default function Navbar() {


    const PAGES =
    {
        HOME: 'home',
        PROJECTS: 'projects',
        BLOGS: 'blogs',
    }

    const Router = useRouter();
    const [currentPage, setCurrentPage] = useState(PAGES.HOME);

    useEffect(() => {
        if (!Router.pathname) return;
        if (Router.pathname.includes('blogs')) setCurrentPage(PAGES.BLOGS);
        else if (Router.pathname.includes('projects')) setCurrentPage(PAGES.PROJECTS);
        else setCurrentPage(PAGES.HOME);
    }, [Router.pathname]);

    return (
        <>
        <NavUnder></NavUnder>
        <NavbarContainer>
            <NavbarMain>
                <NavLink active={(currentPage === PAGES.HOME)} onClick={() => { Router.push('/') }}>
                    {PAGES.HOME}
                </NavLink>
                <NavLink active={(currentPage === PAGES.PROJECTS)} onClick={() => { Router.push('/projects') }}>
                    {PAGES.PROJECTS}
                </NavLink>
                <NavLink active={(currentPage === PAGES.BLOGS)} onClick={() => { Router.push('/blogs') }}>
                    {PAGES.BLOGS}
                </NavLink>
            </NavbarMain>
        </NavbarContainer >
        </>
    )
}
