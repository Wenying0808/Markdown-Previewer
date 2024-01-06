
const editor = document.getElementById('editorContent');
const preview = document.getElementById('previewContent');

// Update the preview when the user types
editor.addEventListener('input', updatePreview);

// Initial preview update
updatePreview();

function updatePreview() {
    const markdownText = editor.value;
    const convertedHtml = marked(markdownText); // Use a Markdown-to-HTML library like 'marked'

      // Update the content of the preview div
    preview.innerHTML = convertedHtml;
    } 
