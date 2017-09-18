import React from 'react'; 
import { Link } from 'react-router'

//loopObj = this.state.reporteesAppraisalL1MSubmitted.concat(this.state.reporteesConfL1MSubmitted).unique();
//loopADDLMObj = this.state.reporteesAppraisalADDLMSubmitted.concat(this.state.reporteesConfADDLMSubmitted).unique();
class Home extends React.Component {
   componentWillMount(){
	   console.log("[component home is mounting...]");
   }
   render() {
      return (
         <div>
            <h1>Home</h1>
			<Link to='/footer'>Nav to Footer</Link>
			<Link to='/header'>Nav to Header</Link>
			<Link to='/homeSub'>Nav to HomeSubComp</Link>
			<h1>{this.props.params.name}</h1>
			{this.props.children}
         </div>
      );
   }
}

export default Home;