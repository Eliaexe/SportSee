import '../styles/LeftNav.css'

export default function LeftNav() {
    return(
        <nav className='leftnav'>
            <h2>Copiryght, SportSee 2020</h2>
            <div className='icon-container'>
                <img src="./img/meditate.png" alt="meditate icon" />
                <img src="./img/bike.png" alt="bike icon" />
                <img src="./img/swim.png" alt="swim icon" />
                <img src="./img/dumbbell.png" alt="dumbbell icon" />
            </div>
        </nav>
    )
}