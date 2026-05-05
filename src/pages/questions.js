import {LitElement, html, css,  } from "lit";

class Questions extends LitElement {
    
    static styles = css`
            .container {
                max-width: 800px;
                margin: auto;
                padding: 20px;
                font-family: Arial, sans-serif;
            }

            h2 {
                text-align: center;
                margin-bottom: 20px;
            }

            .faq {
                border-bottom: 1px solid #ddd;
                padding: 10px 0;
            }

            .question {
                font-weight: bold;
            }

            .answer {
                margin-top: 5px;
                color: #555;
            }
    `;
    render() {
        return html `
            <div class="container">
                <h2>Preguntas Frecuentes</h2>

                <div class="faq">
                    <div class="question">¿Cómo puedo adoptar un perro?</div>
                    <div class="answer">Debes llenar un formulario de adopción, pasar una breve entrevista y asegurarte de contar con las condiciones adecuadas para el cuidado del perro.</div>
                </div>

                <div class="faq">
                    <div class="question">¿Dónde están ubicados?</div>
                    <div class="answer">Nos encontramos en Santo Domingo, Ecuador, donde realizamos el rescate y cuidado de los perritos.</div>
                </div>

                <div class="faq">
                    <div class="question">¿Qué tipo de ayuda aceptan?</div>
                    <div class="answer">Aceptamos donaciones de alimento, medicinas, cobijas y apoyo económico para tratamientos veterinarios.</div>
                </div>

                <div class="faq">
                    <div class="question">¿Puedo ser voluntario?</div>
                    <div class="answer">Sí, puedes unirte como voluntario y ayudar en el cuidado, limpieza y rescate de los perritos.</div>
                </div>
            </div>
        `
    }
}
customElements.define("my-question", Questions);