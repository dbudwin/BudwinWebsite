import React, { Component, ReactElement } from "react";

import AboutMe from "./components/sections/about-me";
import HistoryTimeline from "./components/sections/history-timeline";

export default class App extends Component {
    render(): ReactElement {
        return (
            <React.Fragment>
                <AboutMe heading="Hi, I&apos;m Drew!" subHeading="I&apos;m a professional software engineer based in Virginia." />
                <HistoryTimeline />
            </React.Fragment>
        );
    }
}
