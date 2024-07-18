window.onload = () => {
    function waitUntilReady() {
        const isReadyToGo = !! document.querySelector('[data-cy="public-section"]')

        if (!isReadyToGo) {
            setTimeout(waitUntilReady, 500)
            return;
        }

        main();
    }

    waitUntilReady();
}


function main() {
    alert("Hello world");
}