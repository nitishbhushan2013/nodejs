import React,{Component} from 'react';


class  App extends Component {
  state = {
    names:[]
  }

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(names => {
      console.log("***"+JSON.stringify(names))
      this.setState({names : names})
    })
    .catch(error=> {
      console.error("Something happened");
    })
    

  }
  render() {
    return (
      <div className="App">
       <h2> Name list : </h2>
       <uI>
        {
         this.state.names.map(name=>{
           console.log("111 "+ JSON.stringify(name));
   
           return <li key={name.id}>{name.FirstName}</li>
         })
        }
       </uI>
      </div>
    );
  }
  
}

export default App;
