import React from "react";

export const AppContext = React.createContext();

export class AppController extends React.Component {
    constructor(props) {
        super(props);

        this.addPost = (v) => {
            this.state.posts.push(v);

            this.setState({ posts: this.state.posts })
        }

        this.state = {
            posts: [],
            addPost: this.addPost.bind(this)
        }
    }

    render() {
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>
    }
}