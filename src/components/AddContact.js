import React from 'react';

class AddContact extends React.Component {
    state = {
        name:'',
        email:'',
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name ==="" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:'',email:''});
      this.props.history.push("/");
        
    }
    render() {
        return ( 
              <div className="addcontact">
              <h2>Add Contact</h2>
                  <form className="" onSubmit={this.add}>
                  <div class="input-group">
      <div className="input-group-text"><i class="far fa-user"></i> </div>
      <input type="text" className="form-control" id="inlineFormInputGroupUsername"  value={this.state.name} name="name" placeholder="Name" onChange={(e) => this.setState({name:e.target.value})}/>
    </div>




    <div className="input-group">
      <div className="input-group-text"><i class="fas fa-envelope" ></i> </div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" value={this.state.email} name="name" placeholder="Email" onChange={(e) => this.setState({email:e.target.value})}/>
    </div>
                     
 
    
                      <button class=" btn btn-primary" >Add</button>
                  </form>
                  </div>  
        );
    }
}

export default AddContact;