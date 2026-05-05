import { LitElement, html, css } from "lit";

class GalleryPage extends LitElement {
     get elements(){
        return [

            {
                src: "https://tse3.mm.bing.net/th/id/OIP.Jx1Lvc0PA9M0EkHKn39zKwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
                titulo: "Perrito",
                descripcion: "perrito pequeño"
            },
            {
                src: "https://content.elmueble.com/medio/2023/06/06/perro-de-raza-rottweiler_9f7a22a7_230606102202_1000x667.jpg",
                titulo: "Perro grande",
                descripcion: "perrito pequeño"

            },
            {
                src: "https://tse1.mm.bing.net/th/id/OIP.sSVkJBpp65uvbj9yp3yO5gHaEb?rs=1&pid=ImgDetMain&o=7&rm=3",
                titulo: "Perrito lobo",
                descripcion: "perrito pequeño"
           },
           {
                  src: "https://th.bing.com/th/id/R.c004def9cce24bdca5037378562d5ba7?rik=Wp3yQgUamETULg&riu=http%3a%2f%2fwww.perrosamigos.com%2fUploads%2fperrosamigos.com%2fImagenesGrandes%2flistado-razas-de-perros.jpg&ehk=RUg2anE5xL4kvkLIhHBaYPPVq%2fdHcBHV7uDhguapqeo%3d&risl=&pid=ImgRaw&r=0",
                titulo: "Perrito cachorro",
                descripcion: "perrito pequeño"

           },
           {
                src: "https://tse3.mm.bing.net/th/id/OIP.GUCfSuXpw-KXxDvQ0j02KQHaHB?rs=1&pid=ImgDetMain&o=7&rm=3",
                titulo: "Perrito",
                descripcion: "perrito pequeño"

           }
        ]
     }
   
    static styles = css`
    :host {
                    display: block;
                    padding: 20px;
                    margin-top: 20px;

                }

                .galeria {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 25px;
                }
              
     `;

     render() {
        return html `

        <div class= "galeria">
            ${this.elements.map ((element)=> html`
                <mi-card
                    src="${element.src}"
                    titulo="${element.titulo}"
                    descripcion="${element.descripcion}">
                </mi-card>

                `)}
        </div>
 
           
        `;
     }

}

customElements.define("mi-gallery", GalleryPage);