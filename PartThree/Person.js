const Person = ({ name, age, hobbies }) => {

    const longName = name.length > 8;
    let message;

    if (age >= 18) message = "Please go vote!";
    else message = "You must be 18 to vote.";

    return (
        <div>
            <b>Name: {longName ? name.slice(0,6) : name}</b>
            <p>Learn more information about this person!</p>
            <p>Age: {age}</p>
            <p>Message: {message}</p>
            <p>Hobbies: </p>
            <ul>
                { hobbies.map( hobby => <li>{hobby}</li> ) }
            </ul>
        </div>
    )
}