import React from "react";

import * as Modal from "../modal/modal";

import { ModalHeader, ModalBody, Button } from "reactstrap";

import { AppContext } from "../App.context"

export default Modal.Decorator(
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                img: ""
            }

            this.send = this.send.bind(this);
            this.onImgChange = this.onImgChange.bind(this);
        }

        send(app) {
            let reader = new FileReader();

            reader.onloadend = () => {
                app.addPost(<img src={reader.result} alt="imgpost"></img>);
                this.context.toggle();
            }

            reader.readAsDataURL(this.state.img);
        }

        onImgChange(e) {
            this.setState({ img: e.target.files[0] });
        }

        render() {
            var modal = this.context;
            return (
                <div>
                    <Button onClick={modal.toggle}>Add an image</Button>
                    <Modal.View>
                        <ModalHeader toggle={modal.toggle}>
                            Add an image
                        </ModalHeader>
                        <AppContext.Consumer>
                            {app =>
                                <ModalBody>
                                    <input type="file" onChange={this.onImgChange}></input>
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