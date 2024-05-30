const newBtn = document.getElementById("btn-new");

const snippetsContainer = document.querySelector(".snippets");

newBtn.addEventListener("click", function () {
    window.location.href = "n_snippet.html";
});
const snippets = JSON.parse(localStorage.getItem("snippets") ?? "[]");

snippets.forEach((item, i) => {
    // console.log("outer", i);

    const snippetItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const titleDiv = document.createElement("div");

    titleDiv.setAttribute("class", "snippet-title");
    deleteBtn.setAttribute("class", "btn-del");
    snippetItem.setAttribute("class", "snippet-item");
    snippetItem.setAttribute("data-id", i);

    const dId = snippetItem.getAttribute("data-id");

    // console.log(item.id);
    const updated = JSON.stringify(snippets);

    localStorage.setItem("snippets", updated);

    titleDiv.textContent = `${i + 1}. ${item.title}`;
    deleteBtn.textContent = "Delete";
    snippetItem.appendChild(titleDiv);
    snippetItem.appendChild(deleteBtn);
    snippetsContainer.appendChild(snippetItem);
    titleDiv.addEventListener("click", function () {
        localStorage.setItem("previewID", dId);
        window.location.href = "p_snippet.html";
    });

    deleteBtn.addEventListener("click", function () {
        // console.log("delete");
        snippets.splice(dId, 1);
        localStorage.setItem("snippets", JSON.stringify(snippets));
        // window.location.reload();
        snippetItem.remove();
    });
});
