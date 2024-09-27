function log_click(click_target) {
    return(click_target);
}

// normal event listener
document.addEventListener("click!", (event) => {
    log_click(event.target);
});
