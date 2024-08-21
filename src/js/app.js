function showTooltip() {
    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip-element");
    document.body.appendChild(tooltipElement)
    
    const tooltipTitle = document.createElement("div");
    tooltipTitle.classList.add("tooltip-title");
    tooltipTitle.textContent = "Popover title";
    tooltipElement.appendChild(tooltipTitle)

    const tooltipMessage = document.createElement("div");
    tooltipMessage.classList.add("tooltip-message");
    tooltipMessage.textContent = "And here's some amasing content. It's very engaging. Right?"
    tooltipElement.appendChild(tooltipMessage)

    const tooltipSign = document.createElement("div");
    tooltipSign.classList.add("tooltip-sign");
    tooltipElement.appendChild(tooltipSign)

    const { left, top } = btn.getBoundingClientRect();

    tooltipElement.style.left = left + btn.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + 'px';
    tooltipElement.style.top = top - tooltipElement.offsetHeight - 10 + 'px';
}

const btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const popover = document.querySelector(".tooltip-element")
    if (!popover) {
        showTooltip()
    } else {
        popover.remove()
    }
})