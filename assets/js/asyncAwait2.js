let cl = console.log;

const data = document.getElementById("data");
    let blogs = [
        { title: "Angular 15 is update", content: "it suppots standalone components" },
        { title: "ES6 - Promise", content: "ES6 gives us Promise to handle Async operations" }
    ]

function creatBlog(blog) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .5 ? true : false;
            if(result){
                blogs.push(blog)
                resolve("Blogs are created successfully...!!")
            }else{
                reject("something went wrong...!!")
            }
        }, 3000);
    })
}

function fetchdata() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .5 ? true : false;
            if(result){
                resolve("Blogs are fetched successfully...!!")
            }else{
                reject("something went wrong while fetching blogs...!!")
            }
        }, 1000);
    })
}

function templeting(arr){
    let result = '';
    arr.forEach(blog => {
        result += `
            <div class="card mb-4">
                <div class="card-header text-primary">${blog.title}</div>
                <div class="card-body">${blog.content}</div>
            </div>
        `
    });
    data.innerHTML = result;
}
// Async Await
async function init(){
    try{
        await creatBlog({ title: "ES7 - Async Await", content: "ES7 gives us Async Await to handle Async operations" })
        let result = await fetchdata()
        templeting(blogs)
        Swal.fire({
            icon: 'success',
            title: result,
            showConfirmButton: false,
            timer: 5500
        })
    }catch (err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err,
        })
    }
}
init();