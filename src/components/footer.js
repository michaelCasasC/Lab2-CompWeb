import { LitElement, html, css } from "lit";

class Footer extends LitElement {
    static styles = css`
    footer {
                    background: linear-gradient(135deg, #fcb69f, #ffecd2);
                    color: #3b2f2f;
                    text-align: center;
                    padding: 20px;
                    margin-top: 20px;
                    border-top: 4px solid #ff8a65;
                    box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
                    font-family: Arial, sans-serif;
                }

                p {
                    margin: 5px 0;
                    font-size: 14px;
                    font-weight: 500;
                }

                .love {
                    font-size: 13px;
                    color: #5a4a42;
                }
    `;

    render(){
        return html `
            <footer>
                <p> Fundación Patitas Felices</p>
                <p class="love">Hecho con amor para rescatar y cuidar perritos </p>
                <p>Todos los derechos reservados - ESPE 2026</p>
            </footer>
        
        `;
    }
}

customElements.define("mi-footer", Footer);