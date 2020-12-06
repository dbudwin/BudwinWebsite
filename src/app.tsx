import React, { Component, ReactElement } from "react";

import AboutMe from "./sections/about-me";

export default class App extends Component {
    render(): ReactElement {
        return (
            <AboutMe heading="Hi, I&apos;m Drew!" subHeading="I&apos;m a professional software engineer based in Virginia." />
        );
    }
}
