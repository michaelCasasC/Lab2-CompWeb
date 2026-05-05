import { LitElement, html, css } from "lit";

class Header extends LitElement {
    static styles = css`
     header {
                background: #ffddd1;
                color: #3b2f2f;
                padding: 20px;
                margin: 0;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                border-bottom: 4px solid #ffd5c9;
            }

            .header-top {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
            }

            h1 {
                margin: 4px;
                font-size: 50px;
                font-weight: bold;
                letter-spacing: 1px;
                color: #342b29;
                margin-button: 5px;
            }
            .titleCont{
                width: 100%;
                margin-top : 10px;
                margin-bottom : 50px;
            }

            .span {
                font-size: 50px;
                font-weight: bold;
                color: #ff8f8f;
            }

            nav {
                margin-top: 10px;
            }

            a {
                color: #3b2f2f;
                margin: 0 12px;
                text-decoration: none;
                font-weight: 600;
                padding: 6px 10px;
                border-radius: 8px;
                transition: all 0.3s ease;
            }

            a:hover {
                background: #ff8a65;
                color: white;
                transform: scale(1.05);
            }

            a:active {
                transform: scale(0.95);
            }
    `;

    render(){
        return html `
         <header>
            <div class="header-top">
                <div class= "titleCont">
                    <h1>Fundación <span class="span">Patitas</span> Felices</h1>
                
                </div>

                

                <nav>
                    <a href="/">Inicio</a>
                    <a href="/gallery">Galería</a>
                    <a href="/direction">Dirección</a>
                    <a href="/nosotros">Nosotros</a>
                    <a href="/preguntas">Preguntas Frecuentes</a>
                </nav>
            </div>
        </header>
        
        `;
    }
}

customElements.define("mi-header", Header);