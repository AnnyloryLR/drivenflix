import React from "react";

export default function Top(){
    const [name, SetName] = React.useState("");
    let avatarLayout = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JlVm7MjADONDgpXvAvJ9kYQjtnP4AAiYtA&s";
    const [avatar,SetAvatar] = React.useState(avatarLayout);
    
    function InputName(){
        let nameInput = prompt("Qual é o seu nome?");

        SetName(nameInput);

    }

    function ChangeAvatar(){
        let avatarInput = prompt("Por favor, insira o link da imagem!");
        SetAvatar(avatarInput);
    }

    let welcome = name ? `Seja bem vinda(o), ${name}!` : 'Seja bem vinda(o) ao site!';
    return(
    <div className="top">
        <h1>Drivenflix</h1>
        <div className= "sub">
            <button onClick={InputName}>Inserir nome</button>
            <p>{welcome}</p>
        <img className="img" src={avatar} onClick={ChangeAvatar}></img>
        </div>
    </div>

    )
}
