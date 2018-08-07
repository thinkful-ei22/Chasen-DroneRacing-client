import React from 'react';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Login(props){

//   slugify(text) {
//     return text
//         .toString()
//         .toLowerCase()
//         .replace(/[\s\W-]+/g, '-');
// }

//   goToBoard(event) {
//     event.preventDefault();
//     this.props.history.push(`/board/${this.slugify(this.state.text)}`);
// }
  return (
    <div>
      <h1>Play as Guest</h1>
      <button><Link to='/race'>1,2, DALE!</Link></button>
    </div>
  );
};

