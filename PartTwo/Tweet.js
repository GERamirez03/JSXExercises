const Tweet = ({ username, name, date, message }) => (
    <div>
        <b>Tweet</b>
        <ul>
            <li>Message: {message}</li>
            <li>Date: {date}</li>
            <li>Username: {username}</li>
            <li>Name: {name}</li>
        </ul>
    </div>
)