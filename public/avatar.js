var Avatar = function() {
  var canvas, context, image, user_photo, content_editor
  var layer_2, ctx_2
    canvas = document.querySelector('#avatar-generator')
    context = canvas.getContext("2d")
    content_editor = ''
    image = new Image()
    image.onload = function() {
      context.drawImage(image, 0, 0)
    }
    image.src = 'tech-summit1edit.png'

    layer_2 = document.querySelector('#second-layer')
    ctx_2 = layer_2.getContext('2d')
    const WIDTH = 300
    const HEIGHT = 300
    // user_photo = new Image()
    // user_photo.onload = function() {
    //   context.drawImage(user_photo, 130, 30)
    // }
    // user_photo.src = 'proto.jpg'
  function save(evt) {
    evt.preventDefault()
    var content, filter_text
    content = document.querySelector('.content-editor').innerHTML
    filter_text = content.replace(/<\/+[a-z0-9]+>|<+[a-z0-9]+>/g, '')
    console.log(filter_text)
    ctx_2.clearRect(0, 0, WIDTH, HEIGHT)
    ctx_2.fillStyle = '#000'
    ctx_2.fillText(filter_text, 120, 150)
  }

  window.addEventListener('click', save, false)
}
