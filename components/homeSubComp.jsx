import React from 'react';
import { Link } from 'react-router';

import MyHOC from './hoc.jsx';
import * as MyFunc from './functions.jsx';
import job from './functions.jsx';
import ChildHomeSubComp from './childHomeSubComp.jsx'
class HomeSubComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: 'bala'};
		//this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	componentWillMount(){
	   console.log("[component homeSubComp is mounting...]");
   }
   handleClick(){
	  let calculateMonthlyPayment = function(principal, years, rate) {
			let monthlyRate = 0;
			if (rate) {
				monthlyRate = rate / 100 / 12;
			}
			let monthlyPayment = principal * monthlyRate / 
								 (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
			monthlyPayment = Math.round(monthlyPayment);
			return {principal, years, rate, monthlyPayment, monthlyRate};
	  };
	  
	  let myObj = new calculateMonthlyPayment(1000,1,15);
	  let {principal,years} = calculateMonthlyPayment(1000,1,15);
	  console.log("test:",myObj,principal,years);
	  
	  
	  let addition = x => {
		  return x;
	  }
	  
	  console.log(addition(1));
	  
	  var roles = new Map([ 
	   ['r1', 'User'], 
	   ['r2', 'Guest'], 
	   ['r3', 'Admin'], 
	]);  
	console.log('value of key r1 before set(): ${roles.get("r1")}',roles) 
	roles.set('r1','superUser') 
	console.log('value of key r1 after set(): ${roles.get("r1")}',roles)
	console.log('value of key r1 after set(): ${roles.get("r1")}',roles.get('r1'))
	  
   }
   handleButtonClick(){
	   //{name: 'ammu'}
	   this.setState((prevState)=>({
		   name: prevState.name+' subbu'
	   }));
   }
   render() {
      return (
         <div>
            <h1>HomeSubComp</h1>
			{/*<Link to='/home'>Nav to home</Link>*/}
				<MyHOC/>
			<input type="submit" value="Click to execute" onClick={this.handleClick}/>	
			<h2>{MyFunc.getName()}</h2>
			<h1>{MyFunc.age()}</h1>
			<h1>{MyFunc.status}</h1>
			<h1>{job()}</h1>
			<h1>{this.context.name}</h1>
			<ChildHomeSubComp name={this.state.name}/><input type='button' onClick={this.handleButtonClick.bind(this)}/>
         </div>
      );
   }
}

HomeSubComp.contextTypes = {
	name :  React.PropTypes.string,
}

class Employee {
	
	constructor(principal, years, rate) {
		console.log("constructor called...");
        this.name = principal;
        this.std = years;
        this.gender = rate;
    }
	get getName(){
        return this.name;
    }
}

var std1 = new Employee("bala","8","male");
console.log(std1);
console.log(std1.getName);

fetch("../data.json")
	.then(
	
		(response) => {
		  console.log(response.json());
		}

	).then(function(data) {
	  console.log(data);
	}).catch(function() {
	  console.log("Booo");
	});

	
	
class PrinterClass { 
   doPrint() { 
      console.log("doPrint() from Parent called…"); 
   }  
}	
class StringPrinter extends PrinterClass { 
  doPrint() { 
	 super.doPrint()
	 console.log("doPrint() is printing a string…") 
  } 
} 
var obj = new StringPrinter() 
console.log(obj.doPrint());
export default HomeSubComp;