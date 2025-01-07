// Slider functionality for Home Page
document.getElementById('next').onclick = function() {
    // Get all items in the slider
    let items = document.querySelectorAll('.item');
    // Move the first item to the end of the list
    document.getElementById('slide').appendChild(items[0]);
}

document.getElementById('prev').onclick = function() {
    // Get all items in the slider
    let items = document.querySelectorAll('.item');
    // Move the last item to the beginning of the list
    document.getElementById('slide').prepend(items[items.length - 1]);
}
