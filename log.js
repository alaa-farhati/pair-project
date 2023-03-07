var username = document.getElementById('username')
var password = document.getElementById('password')
var form = document.getElementById('form')
var errorElement = document.getElementById('error')

form.addEventListener('submit', (event) => {
  var  messages = []
  if (username.value === '' || username.value == null) {
    messages.push('username is required')
  }

  if ( 8 <= password.value.length <= 15) {
    messages.push('Password accepted')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
