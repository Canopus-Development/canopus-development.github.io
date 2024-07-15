document.addEventListener('DOMContentLoaded', () => {
    Prism.highlightAll();
});

function copySnippet(button) {
    const snippetContainer = button.closest('.snippet-container');
    const codeElement = snippetContainer.querySelector('code');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent.trim();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Show a temporary "Copied!" message
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    button.disabled = true;
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});