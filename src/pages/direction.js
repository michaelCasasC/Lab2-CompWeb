import { LitElement, html, css } from "lit";

class DirectionPage extends LitElement {
    
   
    static styles = css`
                :host {
                    display: block;
                    padding: 20px;


                }
                 .container {
                font-family: Arial, sans-serif;
                max-width: 900px;
                margin: auto;
                padding: 20px;
                text-align: center;
            }

            .card {
                background: linear-gradient(135deg, #ffecd2, #fcb69f);
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }

            h2 {
                margin-top: 0;
                color: #3b2f2f;
            }

            p {
                color: #5a4a42;
                line-height: 1.6;
            }

            .info {
                margin-top: 15px;
                background: white;
                padding: 15px;
                border-radius: 10px;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                text-align: left;
            }

            .info strong {
                color: #ff8a65;
            }   
              
     `;

     render() {
        return html `

            <div class="container">
                <div class="card">
                    <h2>Ubicación de la Fundación</h2>
                    <p>
                        Nuestra fundación está ubicada en Santo Domingo, Ecuador, donde realizamos el rescate,
                        rehabilitación y cuidado de perritos en situación de abandono.
                    </p>

                    <div class="info">
                        <p><strong>Dirección:</strong> Santo Domingo de los Tsáchilas, Ecuador</p>
                        <p><strong>Referencia:</strong> Cerca del centro urbano principal</p>
                        <p><strong>Atención:</strong> Lunes a sábado de 9:00 a 17:00</p>
                        <p><strong>Contacto:</strong> Disponible en sección de contacto o redes sociales</p>
                    </div>
                </div>
            </div>
           
        `;
     }

}

customElements.define("mi-direccion", DirectionPage);