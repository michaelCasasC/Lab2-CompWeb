import { LitElement, html, css } from "lit";

class DirectionPage extends LitElement {
    
   
    static styles = css`
                :host {
                    display: block;
                    padding: 20px;


                }
              
     `;

     render() {
        return html `

            <h2> Esta es la direccion</h2>
           
        `;
     }

}

customElements.define("mi-direccion", DirectionPage);