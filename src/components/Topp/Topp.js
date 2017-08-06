import React, { Component } from 'react';
import VoteBox from '../VoteBox/VoteBox';


const styles = {
    container: {
        height: 200,
        width: '100%',
        border: '1px solid black'
    },
    topp: {
        marginLeft: 15
    }
}

export default class Topp extends Component {
    render() {
        return (
            <div style={ styles.container }>
                <p style={ styles.topp }>{ this.props.topp }</p>
                <VoteBox />
            </div>
        );
    }
}