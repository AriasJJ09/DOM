var formularioContainer = document.getElementById("formularioContainer");
var registroExitoso = document.getElementById("registroExitoso");

var form = document.createElement("form");
form.id = "registroForm";
formularioContainer.appendChild(form);

var campos = ["Nombre", "Edad", "País", "Hobby Favorito", "Canción Favorita","Color Favorito"];

campos.forEach(function (campo) {
    var label = document.createElement("label");
    label.textContent = campo + ":";
    form.appendChild(label);

    if (campo === "Color Favorito") {
        var inputColor = document.createElement("input");
        inputColor.type = "color";
        inputColor.id = campo.toLowerCase().replace(" ", "");
        inputColor.name = campo.toLowerCase().replace(" ", "");
        form.appendChild(inputColor);
        form.appendChild(document.createElement("br"));
    } else {
        var input = document.createElement("input");
        input.type = "text";
        input.id = campo.toLowerCase().replace(" ", "");
        input.name = campo.toLowerCase().replace(" ", "");
        input.required = true;
        form.appendChild(input);
    }
});

var submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Guardar";
form.appendChild(submitButton);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    campos.forEach(function (campo) {
        var valor = campo === "Color Favorito"
            ? document.getElementById(campo.toLowerCase().replace(" ", "")).value
            : document.getElementById(campo.toLowerCase().replace(" ", "")).value;
        document.getElementById(campo.replace(" ", "") + "Registrado").textContent = valor;
    });

    form.style.display = "none";
    registroExitoso.style.display = "block";
});
