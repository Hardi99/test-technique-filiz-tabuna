function Header() {
    function myFunction() {
        const x = document.getElementById("myTopnav");
        /* Correction du npm run build */
        
        if (x) { // Vérifiez si l'élément avec l'ID "myTopnav" existe
            x.classList.toggle("responsive");
        }
    }

    return (
        <nav className='navbar'>
            <div className="container">
                <div id="responsive">
                    <img src="../images/logo.svg" alt=""/>
                    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                
                <div className="topnav" id="myTopnav">
                    <a href="#about">Qui sommes-nous ?</a>
                    <a href="#cards">Nos valeurs</a>
                    <a href="#form">Reservez !</a>
                </div>            
            </div>
        </nav>
    )
}

export default Header