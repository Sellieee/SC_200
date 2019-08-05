var state = {
  games: []
}

$('document').ready(function () {

  $('.card-display').on('doubleTap','.card', function(){
    $(this).children('i').addClass('heart-anim')
  });
  $('.card-display').on('dblclick','.card', function(){
    $(this).children('i').addClass('heart-anim')
  });

  //LISA ADD SHIT HERE
  $('.card-display').on('tap','.card', function(){
    $(this).children('i').addClass('heart-anim')
  });
  $('.card-display').on('click','.card', function(){
    $(this).children('i').addClass('heart-anim')
  });


  $('.submit-button').on('click', function (e) {
    e.preventDefault();

    var categoryVal = $('#category-selector').val();
    var genreVal = $('#genre-selector').val();

    $('.card-display').empty()
    .append(`<div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>`);

    $.ajax({
        url: `https://steam.cmandersen.com/apps?limit=9&random=1&category=${categoryVal}&genre=${genreVal}&free=0&_=${Date.now()}`,
        method: 'GET'
      })
      .then(function(resp){
        $('.card-display').empty()
        console.log(resp)
        if (resp.length !== 0) {
          resp.forEach((card, index) => {
            console.log(card.image)
            var appendCard = $('<div>').attr({
                class: 'card',
                value: index,
                id: card.id,
                "data-toggle": "modal",
                "data-toggle": ".bd-example-modal-lg"
              }).html(`<h5>${card.name.toUpperCase()}</h5><i class="fa fa-heart"></i>`)
              .css({
                'background-image': `url('${card.image}')`
              })

            $('.card-display').append(appendCard)
          })
        }
      })
      .fail(function(error){
        alert(error);
      })
  })

});