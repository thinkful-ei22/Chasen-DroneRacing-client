import React from 'react';
import {connect} from 'react-redux';

export function Feedback(props){

  const user = props.user.droneId;
  const opponent = props.opponent;
  let winLose;
  // (props.loggedIn.constructor === Object && Object.keys(props.loggedIn).length !== 0)
  if(user !== undefined && Object.keys(user).length !== 0 && Object.keys(opponent).length !== 0){
    
    let userScore = user.speed*16+user.acceleration*19+user.turning*18+user.weight*11+user.drag*11+user.durability*9+user.handling*16;
    let opponentScore = opponent.speed*16+opponent.acceleration*19+opponent.turning*18+opponent.weight*11+opponent.drag*11+opponent.durability*9+opponent.handling*16;
    console.log(user);
    console.log(opponent);
    console.log(userScore);
    console.log(opponentScore);
    if(userScore>opponentScore){
      winLose='You Won!!'
    }else if(userScore===opponentScore){
      winLose="You Tied try again"
    }else{
      winLose='Oh no You Lost'
    }
  }
  


  return (
    <div>
      {winLose}
    </div>
  );
};

export const mapStateToProps = state => ({
  opponent: state.drone.opponent,
  user: state.drone.user,
  oppLoading: state.drone.oppLoading

});

export default connect(mapStateToProps)(Feedback);