const scBtn = document.getElementById("save-create");
const homeBtn = document.getElementById("btn-home");
const titleField = document.querySelector(".title-field");
const codeField = document.querySelector(".code-field");
const sMsg = document.querySelector(".msg-div");
const snippets = JSON.parse(localStorage.getItem("snippets") ?? "[]");

scBtn.addEventListener("click", function () {
    const titleValue = titleField.value;
    const codeValue = codeField.value;
    if (!titleValue || !codeValue) return;

    const data = {
        title: titleValue,
        code: codeValue,
    };

    snippets.push(data);
    localStorage.setItem("snippets", JSON.stringify(snippets));
    titleField.value = "";
    codeField.value = "";
    // sMsg.style.display = "block";
});

homeBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});
