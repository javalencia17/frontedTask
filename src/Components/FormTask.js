import React, {Component} from 'react'
import { Link } from 'react-router-dom' 

class FormTask extends Component{
    render(){
        return (
            
            <div className="row">
                <div className="col-sm-3">

                </div>
                <div className="col-sm-6">
                    <form  onSubmit={this.props.handleTaskAdd}>
                         <div className="form-group">
                            <label for="Title">Title</label>
                            <imput type="text"  class="form-control" name="Title" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <label for="Body">Body</label>
                            <imput type="text"  class="form-control" name="Body" placeholder="Body" />
                        </div>
                        <Link className="btn btn-primary btn-rounded" >Guardar</Link>
                    </form>
                </div>
            </div>  
        )
    }
}

export default FormTask