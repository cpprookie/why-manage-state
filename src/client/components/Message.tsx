import * as React from 'react';

export interface MessageProps {
  message: string,
  userId: number,
}

const Message = ({ message, userId }: MessageProps) => (
  <div className="message-container">
    <p className="text">{message}</p>
    <p className="user-icon">{userId}</p>
  </div>
);

export default Message;