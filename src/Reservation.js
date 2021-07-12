import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberofGuest: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState = ({
            [name]: value
        });
    }

    render() {
        return (
            <div className="inputSection"> 
                 <form>
                     <label>
                         Is going:
                         <input 
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                     </label>
                     <br />
                     <label>
                         Number of guest:
                         <input
                            name="numberofGuest"
                            type="number"
                            value={this.state.numberofGuest}
                            onChange={this.handleInputChange} />
                     </label>
                 </form>
            </div>
        )
    }
}

export default Reservation;