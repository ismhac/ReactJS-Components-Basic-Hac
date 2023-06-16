
import React from 'react'

class MyComponent extends React.Component {

    // key:value
    state = {
        name: 'Hac',
        age: '21'
    }

    /* 
    JSX => return block

    <React.Fragment> </React.fragment> === <> </>

    */
    render() {

        return (
            <>
                <div className='first'>
                    hello my component. My name is {this.state['name']}
                </div>

                <div className='second'>
                    my age: {this.state.age}
                </div>
            </>
        )

    }

}

export default MyComponent;