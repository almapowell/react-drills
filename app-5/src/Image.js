import React, { Component } from 'react'

export default class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.url}></img>
                <caption>Error 599</caption>
            </div>
        )
    }
}