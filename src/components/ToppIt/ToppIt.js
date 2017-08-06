import React, { Component } from 'react';

const styles = {
    container: {
        height: 200,
        width: '100%',
        border: '1px solid black'
    },
    button: {
        backgroundColor: '#00d6bb',
        color: 'white'
    }
};

export default class ToppIt extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            input: '',
            topped: false
        };
    }
    toppIt = () => {
        this.props.addTopp( this.state.input );
        this.setState( { topped: true } );
    }
    changeInput = ( event ) => {
        this.setState( {
            input: event.target.value
        } );
    }
    disabledMessage = () => {
        console.log( 'Sorry, you can only post one Topp per day. Make it good.' );
    }
    render() {
        // if ( !this.state.topped ) {
        return (
            <div style={ styles.container }>
                <textarea value={ this.state.input } onChange={ this.changeInput } />
                { this.state.topped ? <button disabled onClick={ this.disabledMessage }>Topp It</button> : <button onClick={ this.toppIt } type="submit" style={ styles.button }>Topp It</button> }
            </div> 
        );
        // } return null;
    }
}