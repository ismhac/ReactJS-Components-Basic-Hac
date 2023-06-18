
import React from "react";
import { withRouter } from "react-router";
import Color from "./HOC/Color";
import hac from '../../assets/images/hac.png';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000);
    }

    // HOC: higher order component

    render() {

        console.log(">>> check props: ", this.props)
        return (
            <>
                <div>Hello World from Hac</div>
                <div>
                    <img src={hac} />
                </div>
            </>


        )
    }

}

// export default withRouter(Home);
export default Color(Home);