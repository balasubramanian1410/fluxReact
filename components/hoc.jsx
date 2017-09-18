import React from 'react';

var newData = {
   data: 'Data from HOC...',
}

var MyHOC = ComposedComponent => class extends React.Component {

   componentDidMount() {
      this.setState({
         data: newData.data
      });
   }

   render() {
      return (
		<div className='col-xs-12'>
			<ComposedComponent {...this.props} {...this.state} />
		</div>
	  );
   }
};


class MyComponent extends React.Component {
   render() {
      return (
            <h1>this is from MyComponent</h1>
      )
   }
}

export default MyHOC(MyComponent);