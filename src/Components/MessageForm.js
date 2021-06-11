import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageForm = ( props ) => {
  const { addMessage, username } = props;
  const [ messageInput, setMessageInput ] = useState('');
  
  const handleInputChange = ( message ) => {
    setMessageInput(message);
  };
  
  const isDisabled = () => {
    return messageInput.trim() === '';
  };
  
  const resetMessageInput = () => {
    setMessageInput('');
  };
  
  const handleSubmit = ( event ) => {
    event.preventDefault();
    
    addMessage( username, messageInput );
    resetMessageInput();
  };
  
  return (
    <form className="input-group" onSubmit={ handleSubmit }>
      <input type="text" 
    		className="form-control"
    		name="messageInput"
    		placeholder="Enter your message..."
    		value={ messageInput } 
			onChange={ event => handleInputChange(event.target.value) } />
      <div className="input-group-append">
      	<button className="btn submit-button" 
				disabled={ isDisabled() }>SEND</button>
      </div>
	</form>
  );
};

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default MessageForm;