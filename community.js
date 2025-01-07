// Get elements
const postContent = document.getElementById('postContent');
const submitPost = document.getElementById('submitPost');
const postsContainer = document.getElementById('postsContainer');

// Load posts from localStorage on page load
window.onload = function() {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.forEach(post => {
        displayPost(post.content, post.id);
    });
};

// Function to create and display a post
function displayPost(content, id) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.setAttribute('data-id', id);

    // Add content to the post
    const postText = document.createElement('p');
    postText.textContent = content;
    postDiv.appendChild(postText);

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-button');
    deleteBtn.addEventListener('click', function() {
        // Remove the post from the DOM
        postsContainer.removeChild(postDiv);
        // Remove the post from localStorage
        removePostFromLocalStorage(id);
    });
    postDiv.appendChild(deleteBtn);

    // Add the post to the container
    postsContainer.appendChild(postDiv);
}

// Function to save the post to localStorage
function savePostToLocalStorage(content) {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = {
        content: content,
        id: Date.now() // Use timestamp as unique ID
    };
    savedPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(savedPosts));
}

// Function to remove the post from localStorage
function removePostFromLocalStorage(id) {
    let savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts = savedPosts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(savedPosts));
}

// Add event listener for post submission
submitPost.addEventListener('click', function() {
    const content = postContent.value.trim();
    if (content) {
        // Save the post to localStorage
        savePostToLocalStorage(content);
        // Display the post on the page
        displayPost(content, Date.now());
        // Clear the textarea
        postContent.value = '';
    }
});