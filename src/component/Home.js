import React ,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const url = 'http://localhost:4000'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state ={
            users:[] 
        }
    }

    componentDidMount(){
        axios.get(`${url}/users`)
        .then(res => {
            console.log('data = ',res.data);
            this.setState({
                users:res.data
            });
        }).catch(err => console.log(err.message));
    }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-3">Users List</div>
                    </div>
                </div>

                <div className="row">
                    {
                        this.state.users.map((item,key) => {
                            return(
                                <div className="col-md-4 mt-3 mb-3" key={key}>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>
                                                <strong>Name</strong>
                                                <span className="flaot-end"> {item.name} </span>
                                            </p>
                                            <p>
                                                <strong>Email</strong>
                                                <span className="flaot-end"> {item.email} </span>
                                            </p>
                                            <p>
                                                <strong>mobile</strong>
                                                <span className="flaot-end"> {item.mobile} </span>
                                            </p>
                                            <p>
                                                <strong>Address</strong>
                                                <span className="flaot-end"> {item.address} </span>
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`/update/${item.id}`} className="btn btn-info">Update</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}  