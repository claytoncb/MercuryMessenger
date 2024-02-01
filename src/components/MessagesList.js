import "../styleSheets/MessagesList.css"
export default function MessagesList({messages}) {
    return (<div className="MessagesList">
        {messages.map(item=>
        <div className="MessageItem">
            <div className="FromSmall">{item.from} {item.subject? " | "+item.subject :""}</div> 
            <div className="SubjectSmall">{item.body}</div> 
        </div>
        )}
    </div>)
}