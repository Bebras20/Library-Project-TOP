

function Book(title,author,pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read= read;
    /* You must comeback to this 
    this.info = function(){
        if (read){
            return(title +" by " +author +","+pages+ " pages, has been read");
        }
        else{
            return(title +" by " +author +","+pages+ " pages, not read yet");
        }
    }
    */
}
/* Adding first book manually */
const firstBook = new Book("mylife","carl ekombi","265",true);
let myLibrary = [];
myLibrary.push(firstBook);


function addBookToLibrary(Book) {
    
    myLibrary.push(Book);
    displayBooks();
  
}
/*
Creating and displaying books from user input 
*/

displayBooks();
function displayBooks() {
    var bookContainer=document.createElement("div");
    bookContainer.classList.add('bookContainer');
    
    var bookContent=document.createElement("ul");
    bookContent.id='bookContent'+`${myLibrary.length-1}`;
    bookContainer.appendChild(bookContent);
    document.querySelector(".booksContainer").appendChild(bookContent);
    var Title=document.createElement("li");
    var Author=document.createElement("li");
    var Pages=document.createElement("li");
    var Read=document.createElement("li");
    bookContent.appendChild(Title);
    bookContent.appendChild(Author);
    bookContent.appendChild(Pages);
    //
    
    
    Read.style.width="100%";
    Read.style.textAlign="center";
    
    bookContent.appendChild(Read);
    

    var bookContent=document.getElementById("bookContent"+`${myLibrary.length-1}`);
    
    var items = bookContent.getElementsByTagName("li");

    for (let index = 0; index < myLibrary.length; index++) {
        let counter=0;
        for (const key in myLibrary[index]) {
            items[counter].innerHTML=`${myLibrary[index][key]}`;
            
            counter++;
        }
        if (Read.textContent == "true"){
            Read.textContent="Read";
            Read.style.backgroundColor = "rgb(123, 244, 170)"

        }
        else {
            Read.textContent="Not Read";
            Read.style.backgroundColor = "red";
        };
        

    }

}

/* Prevent usual behaviour of submit and  send user data to be displayed*/ 

function ToggleForms(event) {
    
    var form = document.querySelector(".hiddenForms");
    var inputs = document.querySelectorAll("input");
    
    
    form.style.display = 'none';
    document.getElementById('Pages').value='';
    document.getElementById('Title').value='';
    document.getElementById('Read').checked=false;
    document.getElementById('Author').value='';
    
    if(form.style.display != 'none')
           form.style.display = 'none';
       else
       {
           form.style.display = 'block';
           form.addEventListener('mouseup', function(e) {
            
            for (let input of inputs) {
                
                if (e.target.tagName !=="INPUT" ) {
                    
                    form.style.display = 'none';
                  }
            }
            
          });
        }
    
    let btn= document.querySelector('.submitNewBook');
    btn.addEventListener('click',function(event){
        event.stopImmediatePropagation();
        event.preventDefault();
        let newBook = new Book(document.getElementById('Title').value,document.getElementById('Author').value,document.getElementById('Pages').value,document.getElementById('Read').checked);
        addBookToLibrary(newBook);
        form.style.display="none";
        document.getElementById('Pages').value='';
        document.getElementById('Title').value='';
        document.getElementById('Read').checked=false;
        document.getElementById('Author').value='';
    });
}
