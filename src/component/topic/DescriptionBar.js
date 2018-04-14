import React,{Component} from 'react'

export default class DescriptionBar extends React.Component {
    render() {
      return <p>{this.props.description}</p>
    }
  }