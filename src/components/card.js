import { LitElement, html, css } from "lit";

class Footer extends LitElement {
     
    static properties = {
        src: {type: String}, //tipos de datos: Number, Boolean, object, Array 
        titulo: {type: String},
        descripcion: {type: String}
    }
    static styles = css`
                .card{
                    background:#fff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
                    transition: all 0.3s ease;
                    cursor: pointer;
               }

               .card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
               }

               img {
                    width: 100%;
                    height: 180px;
                    display: block;
                    object-fit: cover;
               }

               .card div {
                    padding: 15px;
               }

               h3 {
                    margin: 0 0 5px 0;
               }

               p {
                    margin: 0;
                    color: #555;
               }
     `;

     render(){
        return html `
            <div class="card">
                <img src="${this.src}" alt="${titulo}">
                <div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descripcion}</p>
                </div>
            </div>
        `;
     }

}