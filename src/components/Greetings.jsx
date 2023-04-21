
function Greetings(props) {
    return (
        <div>
            <h1>Bonjour {props.name}</h1>
            {props.objective ? (
                <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
            ) : (
                <h2>Today you can do better than yesterday</h2>
            )}
        </div>
    );
}

export default Greetings;
