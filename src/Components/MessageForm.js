import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageForm = ( props ) => {
  const { addMessage, username } = props;
  const [ messageInput, setMessageInput ] = useState('');
  
  const updateMessageInput = ( message ) => {
    setMessageInput(message);
  };
  
  const isDisabled = () => {
    const disable = messageInput.trim() === '';
    
    return disable;
  };
  
  const resetMessageInput = () => {
    setMessageInput('');
  };
  
  const updateMessages = ( event ) => {
    event.preventDefault();
    const { messageInput } = event.target.form.elements;
    
    addMessage( username, messageInput.value );
    resetMessageInput();
  };
  
  return (
    <form className="input-group">
      <input type="text" 
    		className="form-control"
    		name="messageInput"
    		placeholder="Enter your message..."
    		value={ messageInput } 
			onChange={ event => updateMessageInput(event.target.value) } />
      <div className="input-group-append">
      	<button className="btn submit-button" 
				disabled={ isDisabled() }
                onClick={ updateMessages } >SEND</button>
      </div>
	</form>
  );
};

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default MessageForm;