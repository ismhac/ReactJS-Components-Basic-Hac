
import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {

    // key:value
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Projetc manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log(">>> Check job from parent: ", job)
        // let curentJobs = this.state.arrJobs;
        // curentJobs.push(job);
        this.setState({
            //arrJob: currentJobs
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let curentJobs = this.state.arrJobs;
        curentJobs = curentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: curentJobs
        })
    }

    /* 
    JSX => return block
    <React.Fragment> </React.fragment> === <> </>
    */




    render() {
        console.log(">>> call render: ", this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>
        )
    }
}

export default MyComponent;