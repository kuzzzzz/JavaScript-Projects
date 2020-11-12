const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  // we parse notes to a JSON object to enable us acces the array method foreach
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener("click", () => {
  // if you call the function directly it returns a mouse event instead of the default parameter
  addNewNote();
});

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
             <div class="tools">
                <button class="edit" title="edit"><i class="fas fa-edit"></i></button>
                <button class="delete" title="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
             <div class="main ${text ? "" : "hidden"}"></div>
            <textarea placeholder="Enter your note" class=" ${
              text ? "hidden" : ""
            }"></textarea>
           `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = text; 

  // main.innerHTML = marked(text) third party library for markdown ;

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    // we call remove() A DOM method like append child to remove element from the DOM
    note.remove();

    // Then call update local storage to save the changes
    updateLS();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = `
     <h5>Edit this Note</h5>
     ${value};
     `;

    updateLS();
  });
  // main.innerHTML = marked(text); same as above
  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
