import { useState } from "react";
import MessagesList from "../components/MessagesList";
import { messages } from "../variables/messages";
import MessageView from "../components/MessageView";

export default function Inbox() {
    const [selectedMessage, setSelectedMessage] = useState(messages[0])
    return <div className="Inbox">
        <MessagesList messages={messages} setSelectedMessage={setSelectedMessage}/>
        <MessageView selectedMessage={selectedMessage}/>
    </div>
}