function showContent(sectionId) {
    // Hide all content sections
    document.getElementById('prepare').style.display = 'none';
    document.getElementById('participate').style.display = 'none';
    document.getElementById('opportunities').style.display = 'none';
    
    // Show the selected content
    document.getElementById(sectionId).style.display = 'block';
}

// Initially show the "prepare" section and hide others
document.getElementById('prepare').style.display = 'block';
document.getElementById('participate').style.display = 'none';
document.getElementById('opportunities').style.display = 'none';

 // Select all the advertisement divs
 const ads = document.querySelectorAll('.advertisement div');
 let currentAdIndex = 0; // Track the current visible ad

 // Function to show the next ad
 function showNextAd() {
     // Hide the current ad by setting its opacity to 0
     ads[currentAdIndex].style.opacity = 0;

     // Increment the currentAdIndex (loop back to 0 if at the end)
     currentAdIndex = (currentAdIndex + 1) % ads.length;

     // Show the next ad by setting its opacity to 1
     ads[currentAdIndex].style.opacity = 1;
 }

 // Initially show the first ad
 ads[currentAdIndex].style.opacity = 1;

 // Set an interval to change the ad every 3 seconds
 setInterval(showNextAd, 3000);

 document.addEventListener("DOMContentLoaded", function() {
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    const jobContainer = document.getElementById("jobContainer");
  
    const scrollAmount = 200;  // Amount to scroll
  
    // Function to update button visibility based on scroll position
    function updateButtonVisibility() {
      // Show or hide the left button
      if (jobContainer.scrollLeft === 0) {
        leftBtn.style.display = "none";
      } else {
        leftBtn.style.display = "block";
      }
  
      // Hide right button if at the end
      if (jobContainer.scrollWidth - jobContainer.clientWidth === jobContainer.scrollLeft) {
        rightBtn.style.display = "none";
      } else {
        rightBtn.style.display = "block";
      }
    }
  
    // Event listener for right button click
    rightBtn.addEventListener("click", function() {
      jobContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateButtonVisibility, 300); // Update button visibility after scrolling
    });
  
    // Event listener for left button click
    leftBtn.addEventListener("click", function() {
      jobContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setTimeout(updateButtonVisibility, 300); // Update button visibility after scrolling
    });
  
    // Initially hide the left button if at the start
    updateButtonVisibility();
  });
  