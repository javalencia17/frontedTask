import React , { Component } from 'react'
import TableTask from '../Components/TableTask'
import { BrowserRouter } from 'react-router-dom'

class Inicio  extends Component{
    
    render(){
        return (
            <div>
               <TableTask/>
            </div>
        )
    }

}

export default Inicio