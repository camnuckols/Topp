import React, { Component } from 'react';


const styles = {
    container: {
        // position: 'relative',
        // right: 0
        // width: 100,
        // border: '1px solid blue',
        // marginLeft: 20
    },
    hand: {
        width: 20,
        position: 'relative',
        left: 450
    }
}

export default class VoteBox extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            liked: false
        }
    }

    liked = () => {
        this.setState( { liked: true } );
        console.log( this.state );
    }
    disliked = () => {
        this.setState( { liked: false } );
        console.log( this.state );
    }
    render() {
        return (
            <div style={ styles.container }>
                <h1 style={ styles.hand } onClick={ this.liked }>👍</h1>
                <h1 style={ styles.hand } onClick={ this.disliked }>👎</h1>
            </div>
        );
    }
}
