import axios from 'axios';
import React ,{Component} from 'react'

const url = 'http://localhost:4000'

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state ={
            id:this.state.match.params.id
        }
    }
    componentDidMount(){
        axios.get(`${url}/users/${this.state.id}`)
        .then(res => {
            console.log('data =',res.data);
            this.setState({
                name:res.data.name,
                email:res.data.email,
                mobile:res.data.mobile,
                address:res.data.address
            })
        }).catch(err => console.log(err.message));
    }

    submitHandler = (e) => {
        e.preventDefault();
    }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="display-3">Update List</div>
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