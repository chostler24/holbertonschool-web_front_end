function changeMode(size, weight, transform, background, color) {

}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let para = document.createElement("p");
    let spookButton = document.createElement("button");
    let darkButton = document.createElement("button");
    let screamButton = document.createElement("button");

    para.innerHTML = 'Welcome Holberton!';
    spookButton.innerHTML = 'Spooky';
    darkButton.innerHTML = 'Dark mode';
    screamButton.innerHTML = 'Scream mode';

    document.body.append(para);
    document.body.append(spookButton);
    document.body.append(darkButton);
    document.body.append(screamButton);

    spookButton.addEventListener('click', spooky);
    darkButton.addEventListener('click', darkMode);
    screamButton.addEventListener('click', screamMode);
}

main();
