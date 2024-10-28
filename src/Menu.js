export default function Menu(){
    let menuList = [{title: "Meus vídeos", link: "./home"},
                {title: "Categorias", link: "./categories"},
                {title: "Favoritos", link: "./favorites"},
                 {title: "Adicionar", link: "./add-videos"}]

    return(
        <ul className="sideMenu">
            {menuList.map((m, i) => <MenuItem link={m.link} image="" title={m.title} key={i} />)}
        </ul>

    
    )
}

function MenuItem({link, title}){
    return(
        <li>
            <a href={link}>{title}</a>
        </li>

    )     

}