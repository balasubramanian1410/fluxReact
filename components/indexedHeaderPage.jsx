import React from 'react';
import { Link } from 'react-router';


class IndexedHeaderPage extends React.Component {
   componentWillMount(){
	   console.log("[component IndexedHeaderPage is mounting...]");
   }	
   render() {
      return (
         <div>
            <h1>Indexed Header Page</h1>
			<Link to='/home'>Nav to home</Link>
         </div>
      );
   }
}

export default IndexedHeaderPage;