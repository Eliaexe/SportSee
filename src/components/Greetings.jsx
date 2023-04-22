import '../styles/Greetings.css'

function Greetings(props) {
    return (
        <div className='greetings'>
            <div className='hiUser'>
                <h1>Bonjour</h1><h1 className='nameRed'> {props.name}</h1>
            </div>
            {props.objective ? (
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            ) : (
                <p>Today you can do better than yesterday</p>
            )}
        </div>
    );
}

export default Greetings;
