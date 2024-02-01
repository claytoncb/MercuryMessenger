import "./MessageView.css"
export default function MessageView({selectedMessage}) {
    const message = (message) => {
        console.log(message.subject)
        return (
            <div>
                <h1>{message.subject}</h1>
                <h4>{message.from}</h4>
                <div>{message.body}</div>
            </div>
        )
    }

    return (
        <div className="MessageView">
            {message(selectedMessage)}
        </div>
    )
}