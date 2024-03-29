import React from 'react'
import ReactDOM from 'react-dom/client';

class SampleUsageOfRootRender extends React.Component{
    constructor(props) {
        super(props)
        this.counter = 0
        this.customMethodToUpdateUiWithoutStateHandling = this.customMethodToUpdateUiWithoutStateHandling.bind(this)
    }

    customMethodToUpdateUiWithoutStateHandling() {
        console.log('ge')
        this.counter =+ 1
    }

    render() {
        console.log('this.counter', window.someVariable);
        console.log('121313123123123123123123', process.env.REACT_APP_TOAST_MESSAGE);
        return (
            <div id='aaaaa'>
                hello root render + <span>{this.counter}</span>
                <br />
                <button 
                    onClick={this.customMethodToUpdateUiWithoutStateHandling}
                >
                    click me to update UI
                </button>
            </div>
        )
    }
}
export default SampleUsageOfRootRender
