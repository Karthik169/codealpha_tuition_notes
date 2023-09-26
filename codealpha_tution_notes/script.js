document.addEventListener("DOMContentLoaded", function () {
    const bookNameInput = document.getElementById("book-name");
    const createBookButton = document.getElementById("create-book");
    const bookList = document.getElementById("book-list");
    const noteInput = document.getElementById("note");
    const addNoteButton = document.getElementById("add-note");
    const notesList = document.getElementById("notes");

    createBookButton.addEventListener("click", function () {
        const bookName = bookNameInput.value;
        if (bookName.trim() !== "") {
            const option = document.createElement("option");
            option.value = bookName;
            option.textContent = bookName;
            bookList.appendChild(option);
            bookNameInput.value = "";
        }
    });

    addNoteButton.addEventListener("click", function () {
        const selectedBook = bookList.value;
        const noteText = noteInput.value;
        if (selectedBook && noteText.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = `${selectedBook}: ${noteText}`;
            notesList.appendChild(li);
            noteInput.value = "";
        }
    });
});
