import "../test-support/mocks/vanta-mocks";

import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

function createDiv(idName: string): void {
    const footer = document.createElement("div");
    footer.setAttribute("id", idName);
    document.body.append(footer);
}

it("renders without crashing", () => {
    jest.mock("../images/DrewCartoonNoBackground.png", () => "test.png");

    mockAllIsIntersecting(true);

    createDiv("root");
    createDiv("footer");

    require("../index");
});

// This is to statisy a ts(1208) error
export { };
