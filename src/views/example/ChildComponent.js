
import React from 'react'

import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }


    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        console.log(">>> handleOnClickDelete: ", job)
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {
                    showJob === false ?
                        <div>
                            <button className='btn-show'
                                onClick={() => this.handleShowHide()}>Show</button>
                        </div>
                        :
                        <>
                            <div className='job-lists'>
                                {
                                    arrJobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary}$ <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>

                                            </div>
                                        )
                                    })

                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleShowHide()}>Hide</button>
                            </div>
                        </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> check child props: ', props)
//     let { arrJobs } = props;

//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }
//                     })

//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;