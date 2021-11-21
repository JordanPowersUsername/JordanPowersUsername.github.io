const { cmp400_main } = wasm_bindgen;

async function run() {
    await wasm_bindgen();

    // silence winit's exceptions used for control flow
    try {
        cmp400_main()
    } catch { };
}

run();

// onload and onresize events not used as neither occur after loading the game
const canvas = document.getElementById("canvas");
resize_loop = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.removeProperty("width");
    canvas.style.removeProperty("height");
    requestAnimationFrame(resize_loop);
}
requestAnimationFrame(resize_loop);
