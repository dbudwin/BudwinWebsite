import React, { ReactElement } from "react";

import { Link } from "react-scroll";

interface NavbarLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to: string;
    offset?: number;
}

export default function NavbarLink({ to, offset, ...props }: NavbarLinkProps): ReactElement {
    const scrollDurationMs = 800;

    return (
        <Link
            className="navbar-item"
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            duration={scrollDurationMs}
            offset={offset}
        >
            {props.children}
        </Link>
    );
}
