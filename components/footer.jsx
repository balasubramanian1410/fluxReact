import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	componentWillMount(){
	   console.log("[component footer is mounting...]");
   }
   render() {
      return (
         <div>
            <h1>Footer</h1>
			<Link to='/home'>Nav to home</Link>
         </div>
      );
   }
}

export default Footer;