import React, { ReactElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonLinkProps {
    url: string;
    text: string;
    icon: IconProp;
}

export default function AboutMe({ url, text, icon }: ButtonLinkProps): ReactElement {
    return (
        <a href={url} className="button is-link is-info" target="_blank" rel="noreferrer">
            <span className="icon is-small">
                <FontAwesomeIcon icon={icon} />
            </span>
            <span>{text}</span>
        </a>
    );
}
