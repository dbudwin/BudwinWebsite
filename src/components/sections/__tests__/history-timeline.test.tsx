import "@testing-library/jest-dom";

import HistoryTimeline from "../history-timeline";
import React from "react";
import renderer from "react-test-renderer";

it("shows the history timeline", () => {
    const historyTimeline = renderer.create(<HistoryTimeline />).toJSON();

    expect(historyTimeline).toMatchSnapshot();
});
