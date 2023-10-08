function placeholder_clean(element) {
    const text = element.textContent;
    if (text == "type a movie/actor/genre name...")
    {
        element.textContent = "";
        element.style.opacity = "1"
    }
    return;
}

function placeholder_build(element) {
    const text = element.textContent;
    if (text == "")
    {
        element.style.opacity = "0.7"
        element.textContent = "type a movie/actor/genre name...";
    }
    return;
}