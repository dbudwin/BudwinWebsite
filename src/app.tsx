import React, { Component, ReactElement } from "react";

import AboutMe from "./sections/about-me";
import Timeline from "./sections/timeline";

export default class App extends Component {
    render(): ReactElement {
        return (
            <React.Fragment>
                <AboutMe heading="Hi, I&apos;m Drew!" subHeading="I&apos;m a professional software engineer based in Virginia." />
                <Timeline />
            </React.Fragment>
        );
    }
}
