const errMsg = document.getElementById('errMsg')
const searchResult = document.getElementById("search-data");
//------------- handle search button-----------
const searchBook = () => {
  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  if(searchText === ''){
    errMsg.innerText = 'Please write something to search '
    searchResult.innerText = "";
    return
  }

  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if(data.docs.length === 0){
        errMsg.innerText = 'Please try again something to search '
        searchResult.innerText = "";
      }
      displaySearchResult(data.docs)
    });
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {

  searchResult.innerText = "";
  if(myBooks.length > 0){
    errMsg.innerText = `In this search result found total ${myBooks.length} books`
  }
  myBooks.slice(0,15).forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title"> Name: ${book.title}</h5>
              <h6> Author: ${book.author_name ? book.author_name : 'Author not found'}</h6>
              <p>Publisher: <small> ${book?.publisher ? book?.publisher[0] : 'Publisher not found'} </small></p>
              <small> First Published Year: ${book.first_publish_year ? book.first_publish_year : 'First Publish year not found'}</small>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};

const searchBtn = document.getElementById('search')
searchBtn.onclick = searchBook
