var schwarz = false;

function deezNutzV3()
{
    const randomColor = rolleDieseNüsse();
    console.log(randomColor);
    document.getElementById("fortnite").style.backgroundColor = "#" + randomColor;

    const nochEineSexFarbe = rolleDieseNüsse();
    document.body.style.backgroundColor = "#" + rolleDieseNüsse();
}

function rolleDieseNüsse()
{
    return Math.floor(Math.random()*16777215).toString(16);
}