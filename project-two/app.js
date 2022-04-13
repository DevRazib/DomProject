//step-1(create onload handler)
window.onload = () => {
    main();
}

function main() {

    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function() {
        const bgcolor = generateHexColor();
        root.style.backgroundColor = bgcolor;
        output.value = bgcolor;
    })
}

//step two-random color generator function
function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
//step three-collect all necessary references

//step four-handle the click event