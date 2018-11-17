import React from "react";

import { AppContext } from "../App.context"

export default () => (
    <AppContext.Consumer>
        {app => app.posts.map((v, i) => <p key={i}>{v}</p>)}
    </AppContext.Consumer>
)