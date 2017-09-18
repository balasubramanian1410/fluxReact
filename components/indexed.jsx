import React from 'react';
import { Link } from 'react-router';


class IndexedPage extends React.Component {
   componentWillMount(){
	   console.log("[component indexed Page is mounting...]");
   }	
   render() {
      return (
         <div>
            <h1>Indexed page</h1>
			<Link to='/home'>Nav to home</Link>
         </div>
      );
   }
}

export default IndexedPage;