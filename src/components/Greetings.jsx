import '../styles/Greetings.css'

/*
* Greet the user and tell him if he achieved his goals yesterday or not 
* @param {Object} the data to display
* @retuns {JSX.Element} chart
*
*/

function Greetings(props) {
    return (
        <div className='greetings'>
            <div className='hi-user'>
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
