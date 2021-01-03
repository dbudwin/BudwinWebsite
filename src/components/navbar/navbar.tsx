import React, { ReactElement } from "react";

import { Navbar as BulmaNavbar } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarLink from "./navbar-link";
import { animateScroll } from "react-scroll";
import { useOffset } from "../../hooks/useOffset";

export default function Navbar(): ReactElement {
    const { offsetRef, offset } = useOffset();

    return (
        <BulmaNavbar fixed={"top"} domRef={offsetRef}>
            <BulmaNavbar.Brand>
                <BulmaNavbar.Item role="home" renderAs="a" onClick={(): void => animateScroll.scrollToTop()}>
                    <FontAwesomeIcon icon={["fas", "code"]} size="2x" />
                </BulmaNavbar.Item>
                <BulmaNavbar.Burger />
            </BulmaNavbar.Brand>
            <BulmaNavbar.Menu>
                <BulmaNavbar.Container>
                    <NavbarLink to="aboutMe" offset={offset}>About Me</NavbarLink>
                    <NavbarLink to="history" offset={offset}>History</NavbarLink>
                </BulmaNavbar.Container>
            </BulmaNavbar.Menu>
        </BulmaNavbar>
    );
}
