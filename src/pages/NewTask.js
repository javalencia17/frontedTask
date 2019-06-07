import React ,{ Component} from 'react'
import FormTask from '../Components/FormTask'

class NewTask extends Component {

    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }

    
    render (){
        return(
            <div>
                <FormTask onSumar={ this.handleTaskAdd}/>
            </div>
        )
    }

    handleTaskAdd(){
        
    }

}

export default NewTask