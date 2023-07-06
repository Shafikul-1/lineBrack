var output = document.getElementById('output');

function deleteSymbols() {
  var textInput = document.getElementById('textInput');
  var text = textInput.value;
  
  let sanitizedText = text.replace(/[^.\w\s]|[\d]/g, '');
  output.innerHTML = sanitizedText;

}





const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  const text = document.querySelector('#inputValue').value;

  var words = text.split(' ');
  var result = '';

  for (var i = 0; i < words.length; i++) {
    result += words[i] + ' ';

    if ((i + 1) % 300 === 0) {
      result += '<br><br> A';
    }
  }

  output.innerHTML = result;
});




//Reset Function

// function resetInput() {
//   var textInput = document.getElementById('textInput').value;
//   var output = document.getElementById('output');
  
//   textInput.value = '';
//   output.textContent = '';
// }
