function handleInput(element) {
    console.log(element.value.length);
    changeCharCount(element.value.length);
 }
 
 function changeCharCount(data) {
    const span = document.getElementById('charCount');
    span.innerText = data;
 }