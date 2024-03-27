import { useState } from "react";

const Form: React.FC = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastame] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            !firstname  ||
            !lastname ||
            !phone ||
            !email
        ) {
        alert("Il y a 1 ou plusieurs erreurs");
      } else {
        alert(`Ce qu'il y a dans le state : ${firstname}, ${lastname}, ${email}, ${phone}`);
      }
    };
    
    return (
        <section id="form">
            <div id="text">
                <h2>Réservez votre table !</h2>
                <p>Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <nav>
                    <div>
                        <label htmlFor="lastname">Nom*</label>
                        <input type="text" value={lastname} onChange={(e) => setLastame(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="firstname">Prénom*</label>
                        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                    </div>                    
                </nav><br />

                <nav>
                    <div>
                        <label htmlFor="phone">N° de téléphone*</label>
                        <input type="tel" inputMode="numeric" pattern="[0-9]{10}" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Adresse email*</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>                    
                </nav>
                <button type="submit" className="btn">
                Soumettre
                </button>
            </form>
        </section>
    )
}

export default Form