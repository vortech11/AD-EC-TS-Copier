function dispatchCheckTTs(){
    const event = new CustomEvent("checkTTs");
    document.querySelectorAll(".ECName").forEach(element => {
        element.dispatchEvent(event);
    });
};

window.dispatchCheckTTs = dispatchCheckTTs;

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const ECs = data;
        console.log(ECs);
        
        const container = document.getElementById("ECs");

        const ECs_length = ECs.length;
        for(var ECNum = 0; ECNum < ECs_length; ECNum++){
            const div = document.createElement("div");
            div.className = "clearboth";

            const checkbox = document.createElement("input");
            checkbox.type="checkbox";
            checkbox.className="inline";

            const ECName = document.createElement("p");
            var node = document.createTextNode(ECs[ECNum][0]);
            ECName.appendChild(node);
            ECName.className="inline";
            ECName.classList.add("ECName");
            ECName.classList.add("tooltip");
            ECName.TTNum = ECs[ECNum][1];

            ECName.addEventListener("checkTTs", updateTTs);

            const Tooltip = document.createElement("span");
            var node = document.createTextNode(ECs[ECNum][1]);
            Tooltip.appendChild(node);
            Tooltip.className="tooltiptext";

            ECName.appendChild(Tooltip);

            const copier = document.createElement("button");
            copier.textContent = "Copy";
            copier.className = "inline";
            copier.TSpath = ECs[ECNum][2];
            copier.addEventListener("click", copy);

            div.appendChild(checkbox);
            div.appendChild(ECName);
            div.appendChild(copier);

            container.appendChild(div);
        }
});

function updateTTs(evt) {
    let TT = evt.currentTarget.TTNum;
        if (document.getElementById("TTInput").value < TT) {
            evt.currentTarget.style.backgroundColor = "Red";
        }
        else {
            evt.currentTarget.style.backgroundColor = "Green"
        };
}

function copy(evt) {
    console.log(evt.currentTarget.TSpath);
    navigator.clipboard.writeText(evt.currentTarget.TSpath);
};