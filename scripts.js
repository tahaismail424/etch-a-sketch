let plotDimensions = 0;
const gridContainer = document.getElementById("container");

function resetGrid() {

    //empty grid of last settings
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }
    //prompt for new grid size
    do {
        plotDimensions = Number(prompt("Please enter a single number between 1 and 100 to specify dimensions of grid"));
        if (plotDimensions > 100 || plotDimensions < 1 ||
            !Number.isInteger(plotDimensions))
            {
                alert("The number was not an integer in the specified range. Please enter an integer in the specified range")
            }
    }
    while (plotDimensions > 100 || plotDimensions < 1 ||
        !Number.isInteger(plotDimensions));
    //fill in grid based on specified dimensions
    gridContainer.style.gridTemplateColumns = `repeat(${plotDimensions}, minmax(0, 1fr))`
    gridContainer.style.gridTemplateRows = `repeat(${plotDimensions}, minmax(0, 1fr))`;
    for (i = 0, d = Math.pow(plotDimensions, 2); i < d; i++)
    {
        let tmp = document.createElement("div");
        tmp.classList.add("etch")
        gridContainer.appendChild(tmp);

    }
}
//prompts user for dimensions on-load
window.onload = resetGrid();
//listens for reset button psuh
const btn = document.getElementById("reset");
btn.addEventListener('click', () => {
    resetGrid();
})


