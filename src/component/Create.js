import React ,{Component} from 'react'
import axios from 'axios'

const url = ' http://localhost:4000';

export default class Create extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            mobile:'',
            address:''
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        const data ={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            address:this.state.address
        };
        console.log('data =', data);
        axios.post(`${url}/users`,data)
        .then(res=> {
            alert('user successfully created');
            this.props.history.push('/');
        })
        .catch(err=> console.log(err));
    }


    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-3">Create List</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group mt-2 mb-2">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name"
                                        className="form-control" value={this.state.name}
                                        onChange={(e) => this.setState({name: e.target.value})} 
                                        required />
                                    </div>

                                     <div className="form-group mt-2 mb-2">
                                        <label htmlFor="mobile">mobile</label>
                                        <input type="text" name="mobile" id="mobile"
                                        className="form-control"
                                        value={this.state.mobile}
                                        onChange={(e) => this.setState({mobile: e.target.value})} required />
                                    </div>
                                    
                                     <div className="form-group mt-2 mb-2">
                                        <label htmlFor="email">Email id</label>
                                        <input type="text" name="email" id="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({email: e.target.value})} required />
                                    </div>

                                    <div className="form-group mt-2 mb-2">
                                        <label htmlFor="address">Address</label>
                                        <textarea name="address" id="address" cols="30" rows="10"
                                         className="form-control"
                                         value={this.state.address}
                                        onChange={(e) => this.setState({address: e.target.value})} required></textarea>
                                    </div>

                                    <div className="form-group mt-2 mb-2">
                                        <button type="sumbit" className=" btn-success btn"value="Create">sumbit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}