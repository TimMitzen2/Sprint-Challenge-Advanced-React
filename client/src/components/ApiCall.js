import React from 'react';
import axios from 'axios';

import Players from './Players';

class ApiCall extends React.Component {
   constructor(){
      super();
      this.state={
         player:[]
      }
   }
         componentDidMount(){
            axios
            .get('http://localhost:5000/api/players')
            .then(response=>{
               console.log(response)
               
              
               this.setState({
                  player: response.data
                  
               })
               
            })
            .catch(error=>(console.log('Error:',error)))
         }
   render(){
      return(
         <div>
            {this.state.player.map((player)=>(
               <Players key={player.id} player={player}/>
            ))}
         </div>
      );


   }
}
export default ApiCall;