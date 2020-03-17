import React from "react";

class StartButton extends React.PureComponent {
    render() {
        return(
            <button onClick={this.props.onStart}>Start</button>
        )
    }
}

export default StartButton
