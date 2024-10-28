export default function Content(){
    let content = [{image:"https://i.etsystatic.com/23647903/r/il/fee886/2447996988/il_570xN.2447996988_ifrn.jpg", title:"Psycho"},
        {image:"https://m.media-amazon.com/images/I/5147F62RsML.__AC_SX300_SY300_QL70_ML2_.jpg", title:"Conjuring"},
        {image:"https://br.web.img3.acsta.net/c_310_420/pictures/14/03/21/14/37/038480.jpg", title:"Rosemery's baby"},
        {image:"https://upload.wikimedia.org/wikipedia/pt/thumb/1/1f/Girl%2C_Interrupted.jpg/230px-Girl%2C_Interrupted.jpg", title:"Girl interrupted"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEDBBxfaD5lSyym2dL3Yuz-HEVpwcRj147g&s", title:"V for Vendetta"},
        {image:"https://m.media-amazon.com/images/I/51KWR3S762L._AC_UF894,1000_QL80_.jpg", title:"A Knight's tale"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rI6DzD29LvkTAKpoGNipuf7gjdp8evXg9A&s", title:"Constantine"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-B4QFzYfvhaykduv8ZRzrtgMonASsPYXog&s", title:"Underworld - Awakening"},
        {image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/68/The_mummy.jpg/220px-The_mummy.jpg", title:"The Mummy"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mPJtXQ0V_73GLSTHXNbiAnSlG3DfY3LaFA&s", title:"Lord of the Ring: the fellowship of the Ring"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeDOhHp1oAe6FkL1mKHLxNV-OwYC6BdHCYg&s", title:"Harry Potter and the Sorcerer's stone"},
        {image:"https://m.media-amazon.com/images/M/MV5BOGNhNDAyZWUtNmU3My00ZWRlLTkwYTgtMzZiYmNjNmM0MzVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", title:"Freaky Friday"} 
               
    ]


    return(    
    <ul className="content">
        { content.map((item, i) => <Film image={item.image} title={item.title} key={i}/>)}
    </ul>)
}

function Film({image, title}){
    return(
        <li>
            <img src={image}></img>
            <p>{title}</p>
        </li>

    )
    

}
