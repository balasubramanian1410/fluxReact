import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
   componentWillMount(){
	   console.log("[component header is mounting...]");
   }	
   render() {
      return (
         <div>
            <h1>Header</h1>
			<Link to='/home'>Nav to home</Link>
         </div>
      );
   }
}

export default Header;