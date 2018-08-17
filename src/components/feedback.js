import React from 'react';
import {connect} from 'react-redux';

export function Feedback(props){

  const user = props.user.droneId;
  const opponent = props.opponent;
  let winLose;
  // (props.loggedIn.constructor === Object && Object.keys(props.loggedIn).length !== 0)
  if(user !== undefined && Object.keys(user).length !== 0 && Object.keys(opponent).length !== 0){
    const {speed, acceleration, turning, weight, drag, durability, handling, user}= props;
    const userScore = speed*16+acceleration*19+turning*18+weight*11+drag*11+durability*9+handling*16;
    const opponentScore = opponent.speed*16+opponent.acceleration*19+opponent.turning*18+opponent.weight*11+opponent.drag*11+opponent.durability*9+opponent.handling*16;
    console.log(user);
    console.log(opponent);
    console.log(userScore);
    console.log(opponentScore);
    if(userScore>opponentScore){
      winLose='YOU WON!!'
    }else if(userScore===opponentScore){
      winLose="You Tied try again"
    }else{
      winLose='Oh No You Lost, Try Again'
    }
  }
  


  return (
    <div className='feedback'>
      {winLose?<img src='https://ae01.alicdn.com/kf/HTB1TSPeOpXXXXcHXXXXq6xXFXXXy/11cm-18cm-Checkered-Flag-Cartoon-Car-Styling-Decorative-Vinyl-Stickers-Black-Silver-S3-4773.jpg_640x640.jpg' alt='racing checkered flag' className='flag' />:''}
      {winLose}
      {winLose?<img src='https://ae01.alicdn.com/kf/HTB1TSPeOpXXXXcHXXXXq6xXFXXXy/11cm-18cm-Checkered-Flag-Cartoon-Car-Styling-Decorative-Vinyl-Stickers-Black-Silver-S3-4773.jpg_640x640.jpg' alt='racing checkered flag' className='flag' />:''}
    </div>
  );
};

export const mapStateToProps = state => ({
  opponent: state.drone.opponent,
  user: state.drone.user,
  oppLoading: state.drone.oppLoading,
  speed: state.drone.speed,
  acceleration: state.drone.acceleration,
  turning: state.drone.turning,
  weight: state.drone.weight,
  drag: state.drone.drag,
  durability: state.drone.durability,
  handling: state.drone.handling

});

export default connect(mapStateToProps)(Feedback);