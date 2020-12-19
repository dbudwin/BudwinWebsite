import React, { ReactElement } from "react";

import useAxios from "axios-hooks";

export default function DadJoke(): ReactElement {
    const [{ data, loading, error }] = useAxios({
        url: "https://icanhazdadjoke.com/",
        headers: {
            "User-Agent": "Budw.in Website (https://budw.in/)",
            "accept": "application/json",
        },
    });

    if (loading) return (<React.Fragment>Loading dad joke...</React.Fragment>);
    if (error) return (<React.Fragment>Error fetching dad joke!</React.Fragment>);

    return (<React.Fragment>{data.joke} 🤣</React.Fragment>);
}
