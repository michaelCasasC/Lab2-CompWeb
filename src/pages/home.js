import { LitElement, html, css } from "lit";

class HomePage extends LitElement {
    
   
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

customElements.define("mi-home", HomePage);