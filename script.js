function postStory() {
    const title = document.getElementById('storyTitle').value;
    const content = document.getElementById('storyContent').value;
    
    if(title && content) {
        alert('Story Posted Successfully!');
        // Yahan data save karne ka logic add ho sakta hai
    } else {
        alert('Please fill in both fields.');
    }
}