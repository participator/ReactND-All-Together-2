import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';

const ChatWindow = (props) => {
  const { title, messages, addMessage, user } = props;
  
  return (
    <div className="chat-window">
    	<Header 
    		title={ title }
			username={ user.username } />

		<MessageList 
			messages={ messages }
			username={ user.username } />

		<MessageForm
			addMessage={ addMessage } 
			username={ user.username } />
	</div>
  );
};

ChatWindow.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

export default ChatWindow;