import { LitElement, html, css } from "lit";

class HomePage extends LitElement {
    
   
    static styles = css`
                :host {
                    display: block;
                    padding: 20px;
                }
                .container {
                font-family: Arial, sans-serif;
                padding: 20px;
                max-width: 1000px;
                margin: auto;
                text-align: center;
                }

                .hero {
                    background: linear-gradient(135deg, #ffecd2, #fcb69f);
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }

                h1 {
                    margin: 0;
                    color: #3b2f2f;
                    font-size: 32px;
                }

                p {
                    color: #5a4a42;
                    font-size: 16px;
                    line-height: 1.6;
                }

                .section {
                    margin-top: 30px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                }

                .card {
                    background: white;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
                }

                .card h3 {
                    margin-top: 0;
                    color: #ff8a65;
                }
              
     `;

     render() {
        return html `

            <div class="container">

            <div class="hero">
                <h1>Bienvenido a Fundación Patitas Felices</h1>
                <p>
                    Somos una organización dedicada al rescate, cuidado y adopción de perritos en situación de abandono en Santo Domingo, Ecuador.
                    Nuestro objetivo es darles una segunda oportunidad llena de amor y cuidado.
                </p>
            </div>

            <div class="section">
                <div class="card">
                    <h3>Misión</h3>
                    <p>Rescatar y rehabilitar perritos abandonados, brindándoles atención médica y un hogar responsable.</p>
                </div>

                <div class="card">
                    <h3>Visión</h3>
                    <p>Ser una fundación referente en el bienestar animal y reducción del abandono en Ecuador.</p>
                </div>

                <div class="card">
                    <h3>Apoyo</h3>
                    <p>Promovemos la adopción responsable y recibimos donaciones para continuar nuestra labor.</p>
                </div>
            </div>

        </div>
           
        `;
     }

}

customElements.define("mi-home", HomePage);