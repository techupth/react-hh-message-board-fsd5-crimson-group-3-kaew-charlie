import { useState } from "react";
function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleAddMessageList = () => {
    const newMessageList = [...messageList];
    newMessageList.push(messageInput);
    setMessageList(newMessageList);
  };
  const handleRemoveMessage = (messageIndex) => {
    // ถ้าอยากจะลบ "hi" ออกจาก Array ต้องทำยังไงดี
    // 6.1) Clone array
    const updatedMessageList = [...messageList];
    // 6.2) splice
    updatedMessageList.splice(messageIndex, 1);

    // 6.3) update state
    setMessageList(updatedMessageList);
  };
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            value={messageInput}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={handleAddMessageList}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {/* 3) เอา messageList มา render ด้วย Array.map */}
        {messageList.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleRemoveMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
