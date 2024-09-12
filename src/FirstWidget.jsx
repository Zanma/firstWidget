import { createElement } from "react";

import "./ui/FirstWidget.css";

export function FirstWidget(props) {
    console.log("props", props);

    const {sampleText} = props;

    return <div>{sampleText}</div>;
}
