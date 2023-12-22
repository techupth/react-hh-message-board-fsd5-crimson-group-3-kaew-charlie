import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleAddMessageList = () => {
    //1) clone messageList in newMessageList
    const newMessageList = [...messageList];
    //2)  push messageInput into newMessageList
    newMessageList.push(messageInput);
    //3) update newMEssageList state
    setMessageList(newMessageList);
  };

  const handleDeleteMessageList = (messageIndex) => {
    //1) clone messageList in newMessageList
    const newMessageList = [...messageList];
    //2) splice messageInput into newMessageList
    newMessageList.splice(messageIndex, 1);
    setMessageList(newMessageList);
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
        {messageList.map((message, index) => {
          return (
            <div className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleDeleteMessageList(index);
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
