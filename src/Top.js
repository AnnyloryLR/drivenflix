export default function Top(){
    let name = 'Manu' //prompt("Qual é o seu nome?");
    let welcome = name ? `Seja bem vinda(o) ${name}!` : 'Seja bem vinda(o) ao site!';
    return(
    <div class="top">
        <h1> Container </h1>
        <div class = "sub">
            <button>Mudar o nome</button>
            <p>{welcome}</p>
            <ion-icon class="icon" name="person"></ion-icon>
        </div>
    </div>

    )
}
