import React, { Component } from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Button from "./components/Button";
import Spinner from "./components/Spinner";
import axios from "axios";

import "./App.css";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: null,
        };
    }
    componentDidMount = () => {
        this.newQuote();
    };

    newQuote = () => {
        this.setState({ quote: null });
        axios
            .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
            .then((res) => {
                this.setState({ quote: res.data.data[0] });
                // console.log(res.data.data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="container">
                <Header content={"Quote Generator"} />
                {this.state.quote ? (
                    <Quote quote={this.state.quote} />
                ) : (
                    <Spinner />
                )}
                {/* {this.state.quote && <Quote quote={this.state.quote} />} */}
                <Button newQuote={this.newQuote} />
                <Header />
                
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
