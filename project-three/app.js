//step-1(create onload handler)
window.onload = () => {
    main();
}

function main() {

    const root = document.getElementById('root');
    const changebtn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copybtn = document.getElementById('copy-btn')

    changebtn.addEventListener('click', function() {
        const bgcolor = generateHexColor();
        root.style.backgroundColor = bgcolor;
        output.value = bgcolor;
    });
    copybtn.addEventListener('click', function() {
        navigator.clipboard.writeText(output.value)
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
//step four-handle the click event