import React from 'react';


const ChildHomeSubComp = React.createClass({
	
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	shouldComponentUpdate: function(){
		return true;
	},
	render: function(){
		return(
			<h1 onClick={()=> this.context.router.push('newroute/raja')}>{this.props.name}</h1>
		);
	}
});
ChildHomeSubComp.defaultProps = {
	name : 'raja'
};
ChildHomeSubComp.propTypes = {
	name : React.PropTypes.string.isRequired
};
module.exports = ChildHomeSubComp;