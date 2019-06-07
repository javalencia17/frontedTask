import React from 'react'

class TableTask extends React.Component{

    state = {
        data: []
    }

    async componentDidMount(){
        await this.fetchTasks()
    }

    fetchTasks = async () => {
        let res = await fetch('http://localhost:3333/api/tasks')
        let data = await res.json()

        this.setState({
            data
        })
    }

    render(){
        return(
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>body</th>
                            <th>create</th>
                            <th>update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.data.map((element) => {
                            return(
                                <tr key={ element.id }>
                                    <td>{ element.id }</td>
                                    <td> { element.title }</td>
                                    <td> {element.body } </td>
                                    <td> { element.created_at }</td>
                                    <td>{ element.updated_at}</td> 
                                    <td> 

                                     
                                    </td>                                   
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    




}

export default TableTask