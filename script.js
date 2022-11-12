let books = {
    data: [{
            bookName: "Hide and Seek",
            category: "Age:8-12",
            image: "images/book-1.jpg",
        },
        {
            bookName: "Ginger the Giraffee",
            category: "Age:8-12",
            image: "images/book-2.jpg",
        },
        {
            bookName: "Doing my Chores",
            category: "Age:4-7",
            image: "images/book-3.jpg",
        },
        {
            bookName: "Abe the Service Dog",
            category: "Age:4-7",
            image: "images/book-4.jpg",
        },
        {
            bookName: "Tooth Fairy",
            category: "Age:4-7",
            image: "images/book-5.jpg",
        },
        {
            bookName: "HTML and CSS",
            category: "WebTechnologies",
            image: "images/book-6.png",
        },
        {
            bookName: "DSA in Java",
            category: "DSA",
            image: "images/book-7.jpg",
        },
        {
            bookName: "SQL",
            category: "SQL",
            image: "images/book-8.jfif",
        },
        {
            bookName: "SQL",
            category: "SQL",
            image: "images/book-9.jpg",
        },
        {
            bookName: "SQL",
            category: "SQL",
            image: "images/book-10.jpg",
        },
        {
            bookName: "DSA in JavaScript",
            category: "DSA",
            image: "images/book-11.jpg",
        },
        {
            bookName: "DSA in C++",
            category: "DSA",
            image: "images/book-12.jpg",
        },
        {
            bookName: "Web Designing",
            category: "WebTechnologies",
            image: "images/book-13.jfif",
        },
    ],
};

for (let i of books.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5")
    name.classList.add("book-name");
    name.innerText = i.bookName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);

    document.getElementById("books").appendChild(card);
}

function filterBook(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {

        if (value == "all") {
            console.log(value);
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".book-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
    console.log(searchInput);
});



window.onload = () => {
    filterBook("all");
};