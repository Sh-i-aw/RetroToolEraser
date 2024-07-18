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
    const button = document.createElement('button');
    button.textContent = "Hello Button";
    button.addEventListener('click', ()=>{
        const deleteButtons = document.querySelectorAll('[data-cy="public-section"]  [data-cy="delete"]');
        deleteButtons.forEach((button) => button.click());
    });
    const roomName = document.querySelector('[data-cy="room-name"]');
    roomName.appendChild(button);

}