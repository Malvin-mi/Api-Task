
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=> {
        console.log(data);
        let postLayout = document.getElementById('post-layout');
        let html = "";
        data.forEach(e => {
            // console.log(element)
            html += `
            <div class="col-md-4 mb-4">
            <a href="./single.html" onClick="singlePage(${e.id})" class="text-black text-decoration-none">
               <div class="card h-100">
                  <div class="card-body text-white bg-dark">
                    <div class= "d-flex justify-content-end">
                    <h5 class= "num text-info">${e.id}</h5>
                    </div>
                    <h5 class="post-tit card-header" id="my-post-title"> ${e.title}.</h5>
                    <p class="post-bod" id="my-post-body">${e.body}.</p>
                           
                  </div>
               </div>
            </a>   
            </div>
            `
           
            postLayout.innerHTML = html
        });
    })

};

getPosts();

let data = localStorage.setItem('data', JSON.stringify(data));

function singlePage(clickThis) {
    
  localStorage.setItem('ePosts', clickThis)
}