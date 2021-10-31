
let clickPosts = localStorage.getItem('ePosts');

fetch(`https://jsonplaceholder.typicode.com/posts/${clickPosts}`)
.then(response => response.json())
.then((data)=> {
    console.log(data);
    let postLayout = document.getElementById('post-layout');
    html = `
    <div class=""> 
               <div class="card h-100 w-50">
                  <div class="card-body">
                    <div class= "d-flex justify-content-end">
                    <h5 class= "num text-info">${data.id}</h5>
                    </div>
                    <h5 class="post-tit card-header" id="my-post-title"> ${data.title}.</h5>
                    <p class="post-bod" id="my-post-body">${data.body}.</p>
                           
                  </div>
               </div>  
            </div>`;
            postLayout.innerHTML = html;
})