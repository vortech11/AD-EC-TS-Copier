const ECs = [["1 x 1", "the first"],
            ["1 x 2", "the second"],
            ["2 x 1", "you get the point"],
            ["2 x 2", "..."]]


const container = document.getElementById("ECs");

const ECs_length = ECs.length;
for(var ECNum = 0; ECNum < ECs_length; ECNum++){
    const div = document.createElement("div");
    div.className = "clearboth";

    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.className="inline";

    const ECName = document.createElement("p");
    const node = document.createTextNode(ECs[ECNum][0]);
    ECName.appendChild(node);
    ECName.className="inline";

    const copier = document.createElement("button");
    copier.textContent = "Copy";
    copier.className = "inline";
    copier.TSpath = ECs[ECNum][1]
    copier.addEventListener("click", copy);

    div.appendChild(checkbox);
    div.appendChild(ECName);
    div.appendChild(copier);

    container.appendChild(div);
}


function copy(evt) {
    navigator.clipboard.writeText(evt.currentTarget.TSpath);
}