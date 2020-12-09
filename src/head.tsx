import React, { ReactElement } from "react";

import { Helmet } from "react-helmet";

interface HeadProps {
    title: string;
}

export default function Head({ title }: HeadProps): ReactElement {
    return (
        <Helmet>
            <title>{title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" type="text/css" href="dist/main.css" />
            <link rel="apple-touch-icon" sizes="180x180" href="src/images/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="src/images/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="src/images/icons/favicon-16x16.png" />
            <link rel="manifest" href="src/images/icons/site.webmanifest" />
            <link rel="mask-icon" href="src/images/icons/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Helmet>
    );
}
