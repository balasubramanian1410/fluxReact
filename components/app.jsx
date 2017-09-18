import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Home from './home.jsx'
import IndexedPage from './indexed.jsx'
import IndexedHeaderPage from './indexedHeaderPage.jsx'
class App extends React.Component {
   
   getChildContext(){
	   return {
		   name:"bala"
	   };
   }
   componentWillMount(){
	   console.log("[component router is mounting...]");
   }
   render() {
      return (
         <Router history={hashHistory}>
			
				
				{/*<Route path='/' component={Home}/>
				<Route path='/header' component={Header}/>
				<Route path='/footer' component={Footer}/>*/}
				
			
			<Route path='/' component={Home}>
				<IndexRoute component={IndexedPage}/>  {/*it gets mounted when '/' is hit*/}
				<Route path='/homeSub' getComponent={(nextState,cb)=>{
					require.ensure([],require=>{
						cb(null,require('./homeSubComp.jsx').default)
					})
				}}/> {/*it gets mounted when '/homeSub' is hit, along with Home component. but not with IndexedPage*/}
				
			</Route>				
			<Route path='/header' getComponent={(nextState,cb)=>{
				require.ensure([],require=>{
					cb(null,require('./header.jsx').default)
				})
			}}/>
			<Route path='/footer' getComponent={(nextState,cb)=>{
				require.ensure([],require=>{
					cb(null,require('./footer.jsx').default)
				})
			}}/>
			<Route path='/home' getComponent={(nextState,cb)=>{
				require.ensure([],require=>{
					cb(null,require('./home.jsx').default)
				})
			}}/>
			<Route path='/newroute/:name' getComponent={(nextState,cb)=>{
				require.ensure([],require=>{
					cb(null,require('./home.jsx').default)
				})
			}}/>
			
		 </Router>
      );
   }
}
App.childContextTypes = {
		name: React.PropTypes.string.isRequired
}

export default App;