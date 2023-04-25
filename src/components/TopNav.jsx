import '../styles/TopNav.css'

export default function TopNav(params) {
    return(
        <nav className='topnav'>
            <img src="img/logo.png" alt="" />
            <h2>Accueil</h2>
            <h2>Profil</h2>
            <h2>Réglage</h2>
            <h2>Communauté</h2>
        </nav>
    )
}