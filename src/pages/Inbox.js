import MessagesList from "../components/MessagesList";
import { messages } from "../variables/messages";

export default function Inbox() {
    
    return <div className="Inbox">
        <MessagesList messages={messages}/>
    </div>
}