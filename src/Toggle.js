import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

    }

    render() {
        return(
            <div className="Alert">     
                <button className="simple" onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'} 
                </button>
            </div>
        )
    }
}

export default Toggle;