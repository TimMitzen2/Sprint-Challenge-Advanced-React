import React from 'react';



class Players extends React.Component {
   render()
      {
         return(
            <div>
               <h2>Name and County</h2>
               <p>{`${this.props.player.name} - ${this.props.player.country}`}</p>
               
               
            </div>
      );
   }
   
}

export default Players;