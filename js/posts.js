fetch(`https://www.heynutritionlady.com/wp-json/wp/v2/posts`)
.then(function(responses){
  return responses.json()
})
.then(function(post){
    for (var i =0; i<10 ; i++){
 $(`#posts`).append(`<h1>${post[i].title.rendered}</h1>`)
 $(`#posts`).append(post[i].content.rendered)
 $(`#posts`).append(post[i].excerpt.rendered)
 $(`#posts`).append(post[i].yoast_head)
 $(`#posts`).append(`<hr>`)
    }
})

