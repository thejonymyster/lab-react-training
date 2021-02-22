import React from 'react';

function IdCard(props) {
    return (
        <div>
        <section>
        <img src={props.picture}></img>
        <ul>
            <li>First Name: {props.firstName}</li>
            <li>Last Name: {props.lastName}</li>
            <li>Gender Name: {props.gender}</li>
            <li>Height Name: {props.height} cm</li>
            <li>First Birth: {/* <b>Birthday</b>: {moment(props.birth).format('LLLL')} */}</li>
        </ul>
        </section>
        </div>
    );
};

export default IdCard;