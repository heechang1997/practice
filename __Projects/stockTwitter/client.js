console.log("testing client.js")

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content')
    console.log("form was submitted");// url changed
    
    
    const stock = {
        name,
        content
    };
    console.log(stock);
})



