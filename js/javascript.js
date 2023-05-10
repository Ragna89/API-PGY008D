function consumoApi(){
let idapi = document.getElementById("inputapi").value;
    fetch('https://rickandmortyapi.com/api/character/'+ idapi)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            let nombre = document.getElementById("pjn");
            let estatus = document.getElementById("pjest");
            let imagen = document.getElementById("pjfoto");


            imagen.src = data.image;
            nombre.innerHTML = "Nombre: " + data.name;
            estatus.innerHTML = "Estatus: " + data.status;
        })
}

$(function () {
    $("#login").validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 8
            }
        },
        messages:{
            email:{
                required: "Debe ingresar e-mail",
                email: "Ingrese email correctamente"
            },
            password:{
                required: "Debe ingresar contraseña",
                minlength: "Debe contener al menos 8 carácteres"
            }
        }
    })
})