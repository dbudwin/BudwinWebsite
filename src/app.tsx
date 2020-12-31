import React, { ReactElement } from "react";

import AboutMe from "./components/sections/about-me";
import HistoryTimeline from "./components/sections/history-timeline";
import Navbar from "./components/navbar/navbar";

export default function App(): ReactElement {
    return (
        <React.Fragment>
            <Navbar />
            <AboutMe id="aboutMe" heading="Hi, I&apos;m Drew!" subHeading="I&apos;m a professional software engineer based in Virginia." />
            <HistoryTimeline id="history" />
        </React.Fragment>
    );
}
