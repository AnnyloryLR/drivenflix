export default function Menu(){
    return(
    <ul class="side-menu">
        <MenuItem link="./home" image="" text="Meus vídeos" />
        <MenuItem link="./categories" image="" text="Categorias" />
        <MenuItem link="./favorites" image="" text="Favoritos" />
        <MenuItem link="./added-videos" image="" text="Adicionar" />
         
     </ul>

    )
}

function MenuItem(props){
    return(
        <li>
            <a href={props.link}>{props.text}</a>
        </li>

    )     

}