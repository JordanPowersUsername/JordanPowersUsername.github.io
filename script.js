// load wasm or something?
const { cmp400_main } = wasm_bindgen;
wasm_bindgen();

// run game on button click or something?
const button_div = document.getElementById("button_div");
const button = document.createElement("button");
button.innerHTML = "🙂";
button_div.appendChild(button);
onload = () => {
    button.onclick = () => {
        button.innerHTML = "😮";
        setTimeout(() => {
            button_div.remove();
            console.log("clicked!");
            // silence winit's exceptions used for control flow
            try {
                cmp400_main()
            } catch { };
            // start resize loop
            requestAnimationFrame(resize_loop);
            canvas.focus();
        }, 0);
    };
}

// onload and onresize events not used as neither occur after loading the game 
// so instead loop forever, or something?
const canvas = document.getElementById("canvas");
resize_loop = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.removeProperty("width");
    canvas.style.removeProperty("height");
    requestAnimationFrame(resize_loop);
}
