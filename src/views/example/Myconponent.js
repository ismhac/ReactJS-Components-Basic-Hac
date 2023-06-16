
import React from 'react'

class MyComponent extends React.Component {

    // key:value
    state = {
        name: '',
        age: '21'
    }

    /* 
    JSX => return block

    <React.Fragment> </React.fragment> === <> </>

    */
    handleOnChangeName = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    handleClickButton = () => {
        alert('Click me')
    }

    render() {
        console.log(">>> call render: ", this.state)
        return (
            <>
                <div className='first'>
                    <input value={this.state.name}
                        type='text' onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state['name']}
                </div>

                <div className='second'>
                    my age: {this.state.age}
                </div>
                <div className='third'>
                    <button onClick={() => { this.handleClickButton() }}>Click me</button>
                </div>
            </>
        )

    }
}

export default MyComponent;