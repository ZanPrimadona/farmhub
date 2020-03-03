import React, { Component } from 'react'

export class RefTutorial extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.inputRef)
    this.inputRef.current.focus()
  }
  
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default RefTutorial

