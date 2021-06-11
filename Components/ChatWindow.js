import React from 'react';
import PropTypes from 'prop-types';

const ChatWindow = (props) => {
  const { title, messages, user } = props;
    
  const isDisabled = () => {
    return false;
  };
  
  return (
    <div className="chat-window">
    	<h2>title</h2>
    	<div className="name sender">{user.username}</div>

		<ul className="message-list">
			{messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username ? 'message sender' : 'message recipient'
                  }
                >
				<p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
        </ul>
        <div>
        	<form className="input-group">
            	<input type="text" className="form-control" placeholder="Enter your message..." />
              <div className="input-group-append">
                  <button className="btn submit-button" disabled={isDisabled()}>
                      SEND
                  </button>
              </div>
            </form>
        </div>
    </div>
  );
};

ChatWindow.propType = {
	title: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
};

export default ChatWindow;