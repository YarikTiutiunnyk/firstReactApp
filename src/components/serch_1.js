import React, { Component, createRef } from 'react'
import { Input, Button } from 'semantic-ui-react'

class InputExampleRefFocus extends Component {
  inputRef = createRef()
  handleClick = () => this.inputRef.current.focus()

  render() {
    return (
      <div className='serchBar'>
        <Button size='huge' content='focus' onClick={this.handleClick} />
        <Input  size='huge' ref={this.inputRef} placeholder='Search...' />
      </div>
    )
  }
}

export default InputExampleRefFocus