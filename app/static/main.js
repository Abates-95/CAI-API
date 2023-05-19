document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".gallery-image img");
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");

  // Add click event listener to each image
  images.forEach(function(image) {
    image.addEventListener("click", function() {
      const paintingId = image.getAttribute("alt"); // Get the painting ID from the alt attribute
      fetchPaintingInfo(paintingId)
        .then(paintingInfo => {
          modal.style.display = "block";
          modalImg.src = image.src;
          captionText.innerHTML = createCaption(paintingInfo);
        })
        .catch(error => {
          console.error("Error fetching painting information:", error);
        });
    });
  });

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  };

  // Function to fetch painting information from the Chicago Art Institute API
  function fetchPaintingInfo(paintingId) {
    // Make the API request
    return fetch(`https://api.artic.edu/api/v1/artworks/${paintingId}`)
      .then(response => response.json())
      .then(data => {
        // Setting the painting information from the API response
        const painting = data.data;
        const desc = data.data.thumbnail;

        // Return the painting information
        return {
          title: painting.title,
          artist: painting.artist_title,
          date: painting.date_display,
          description: desc.alt_text,
          medium: painting.medium_display,
          placeOfOrigin: painting.place_of_origin
        };
      });
  }

  // Function to create the caption with painting information
  function createCaption(paintingInfo) {
    const caption = `
      <h3>${paintingInfo.title}</h3>
      <p>Artist: ${paintingInfo.artist}</p>
      <p>Date: ${paintingInfo.date}</p>
      <p>Medium: ${paintingInfo.medium}</p>
      <p id="origin" >Place of Origin: ${paintingInfo.placeOfOrigin}</p>
      <p>Alternate Description:</p>
      <p>"${paintingInfo.description}"</p>
    `;
    return caption;
  }
});




