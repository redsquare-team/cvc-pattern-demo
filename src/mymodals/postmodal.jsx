import React from "react";

import * as Modal from "../modal/modal";

import { ModalHeader, ModalBody, Button } from "reactstrap";

import { AppContext } from "../App.context"

export default Modal.Decorator(
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                text: ""
            }

            this.send = this.send.bind(this);
            this.onTextChange = this.onTextChange.bind(this);
        }

        send(app) {
            app.addPost(this.state.text);
            this.context.toggle();
        }

        onTextChange(e) {
            this.setState({ text: e.target.value });
        }

        render() {
            var modal = this.context;
            return (
                <div>
                    <Button onClick={modal.toggle}>Add a post</Button>
                    <Modal.View>
                        <ModalHeader toggle={modal.toggle}>
                            Add a textual post
                        </ModalHeader>
                        <AppContext.Consumer>
                            {app =>
                                <ModalBody>
                                    <input type="text" value={this.state.text} onChange={this.onTextChange}></input>
                                    <Button onClick={() => this.send(app)}>SEND</Button>
                                </ModalBody>
                            }
                        </AppContext.Consumer>
                    </Modal.View>
                </div>
            )
        }
    }
);