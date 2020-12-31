import "@testing-library/jest-dom";

import HistoryTimeline from "../history-timeline";
import React from "react";
import renderer from "react-test-renderer";

it("shows the history timeline", () => {
    const footer = renderer.create(<HistoryTimeline />).toJSON();

    expect(footer).toMatchSnapshot();
});
