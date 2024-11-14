<script>
function showContent(section) {
    // Hide all sections
    document.getElementById('prepare').style.display = 'none';
    document.getElementById('participate').style.display = 'none';
    document.getElementById('opportunities').style.display = 'none';

    // Show the clicked section
    document.getElementById(section).style.display = 'block';
}

// Show the Prepare content by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    showContent('prepare');
});
</script>
