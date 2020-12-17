import React, { ReactElement } from "react";

interface SecureLinkProps {
    url: string;
    text: string;
}

export default function SecureLink({ url, text }: SecureLinkProps): ReactElement {
    return (<a href={url} target="_blank" rel="noreferrer">{text}</a>);
}
