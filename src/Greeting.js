function UserGreeting(props) {
    return (
        <div className="greeting">
            <h1>Welcome back!</h1>
        </div>
    );
}

function GuestGreeting(props) {
    return (
        <div className="greeting">
           <h1>Please sign up.</h1>
        </div>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;