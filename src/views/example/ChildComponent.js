
import React from 'react'

// class ChildComponent extends React.Component {

//     render() {
//         // let name = this.props.name;
//         // let age = this.props.age;
//         console.log(">>> check props: ", this.props)

//         let { name, age, address, arrJobs } = this.props;
//         let a = ''
//         return (
//             <>
//                 <div className='job-lists'>
//                     {
//                         a = arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })

//                     }
//                     {console.log('>>> check map array: ', a)}
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    console.log('>>> check child props: ', props)
    let { arrJobs } = props;

    return (
        <>
            <div className='job-lists'>
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })

                }
            </div>
        </>
    )
}

export default ChildComponent;