const knownOnucas = [
    "29074",
    "18564",
    "1264",
    "26419",
    "2519",
    "32514",
    "853",
    "32508",
    "7493",
    "29372",
    "10843",
    "4569",
    "32252",
    "29560",
    "1470"
];

const getId = function(pathWithId){
    return pathWithId.substring(pathWithId.lastIndexOf("/") + 1);
}

const detectOnucasUsingHighlyAdvancedAI = function(potentialOnucaElements) {
    return Array.prototype.filter.call(potentialOnucaElements, function(potentialOnucaElement) {
        const id = getId(potentialOnucaElement.getAttribute("href"));

        return knownOnucas.includes(id);
    });
}

const markElementsAsOnucas = function(onucas){
    onucas.forEach(onuca => {
        onuca.innerText += "🧦🧦🧦"
        onuca.setAttribute("title", "R*ska onuca")
    });
}

window.onload = function()   {
    const potentialOnucaElements = document.getElementsByClassName("nick");
    const detectedOnucaElements = detectOnucasUsingHighlyAdvancedAI(potentialOnucaElements);
    markElementsAsOnucas(detectedOnucaElements);
}