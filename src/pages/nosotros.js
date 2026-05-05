import { LitElement, html, css } from "lit";

class Nosotros extends LitElement {
    
   
    static styles = css`
                :host {
                    display: block;
                    padding: 20px;
                }
                :host {
                display: block;
                font-family: Arial, sans-serif;
                padding: 20px;
            
            }
            .container {
                max-width: 900px;
                margin: auto;
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            img {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }
            .content {
                padding: 20px;
            }
            h2 {
                margin-top: 0;
                color: #333;
            }
            p {
                line-height: 1.6;
                color: #555;
            }
            .highlight {
                margin-top: 15px;
                padding: 10px;
                background: #ffe8e8;
                border-left: 5px solid #ff6b6b;
            }
              
     `;

     render() {
        return html `

            <div class="container">
            <img src="https://placedog.net/800/400" alt="Fundación de perritos">

            <div class="content">
                <h2>Sobre Nosotros</h2>
                <p>
                    Somos una fundación dedicada al rescate, cuidado y adopción de perritos en situación de abandono en Santo Domingo, Ecuador.
                    Nuestro objetivo es brindarles una segunda oportunidad a través de atención médica, alimentación y hogares responsables.
                </p>

                <p>
                    Desde nuestros inicios, hemos trabajado con voluntarios comprometidos que creen en el bienestar animal y en la importancia
                    de generar conciencia sobre la adopción responsable.
                </p>

                <div class="highlight">
                    Ubicación: Santo Domingo, Ecuador <br>
                    Misión: Rescatar, rehabilitar y encontrar hogares para perros en situación de calle <br>
                    Visión: Una comunidad más consciente y sin abandono animal
                </div>
            </div>
        </div>
           
        `;
     }

}

customElements.define("mi-nosotros", Nosotros);