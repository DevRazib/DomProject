/* step one- create onload handler
step two- random color generator function
step three- collect all necessary references
stpe four - handle the click event */


//step-1
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function() {
        const bgcolor = generateRGBColor()
        root.style.backgroundColor = bgcolor;
    })
}


//step two

function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}