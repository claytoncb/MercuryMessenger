import "./MessagesList.css"
import SearchBar from "./SearchBar"
export default function MessagesList({messages, setSelectedMessage}) {
    return (
        <div className="InboxSideBar">
        <SearchBar/>
        <div className="MessagesList">
            {messages.map( (item, i)=>
            <div className="MessageItem" key={i} onClick={()=>{setSelectedMessage(messages[i])}}>
                <div className="FromSmall">{item.from} {item.subject? " | "+item.subject :""}</div> 
                <div className="SubjectSmall">{item.body}</div> 
            </div>
            )}
        </div>
        </div>
    )
}