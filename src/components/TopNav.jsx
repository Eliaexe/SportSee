import '../styles/TopNav.css'

export default function TopNav() {
    return(
        <nav className='topnav'>
            <img src="img/logo.png" alt="" />
            <a href='/'>Accueil</a>
            <a href='/'>Profil</a>
            <a href='/'>Réglage</a>
            <a href='/'>Communauté</a>
        </nav>
    )
}