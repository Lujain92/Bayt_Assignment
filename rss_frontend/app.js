// app.js

// Reusable function to fetch data from the API and populate the table
async function populateTable() {
  const tableBody = document.querySelector("#jobTable tbody");

  try {
      // Fetch data from the API
      const response = await fetch("http://127.0.0.1:8000/jobs/api/jobs/");
      const data = await response.json();

      // Loop through the data and create table rows
      data.forEach(job => {
          const row = document.createElement("tr");
          const titleCell = document.createElement("td");
          const locationCell = document.createElement("td");

          // Set the cell values from the API data
          titleCell.textContent = job.title;
          locationCell.textContent = job.location;

          // Append cells to the row
          row.appendChild(titleCell);
          row.appendChild(locationCell);

          // Append the row to the table body
          tableBody.appendChild(row);
      });
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

// Function to initialize Google Maps
function initMap() {
  const cairo = { lat: 30.064742, lng: 31.249509 };
  const map = new google.maps.Map(document.getElementById("map"), {
      scaleControl: true,
      center: cairo,
      zoom: 10,
  });

  // Make a request to your API to fetch the data and create markers
  fetch("http://127.0.0.1:8000/jobs/api/jobs/")
      .then((response) => response.json())
      .then((data) => {
          data.forEach((job) => {
              const { title, location } = job;
              const [city, country] = location.split(" - ");
              const geocoder = new google.maps.Geocoder();

              geocoder.geocode({ address: location }, (results, status) => {
                  if (status === google.maps.GeocoderStatus.OK) {
                      const position = results[0].geometry.location;
                      const marker = new google.maps.Marker({ map, position, title });

                      marker.addListener("click", () => {
                          const infowindow = new google.maps.InfoWindow({
                              content: `<b>${title}</b>`,
                          });
                          infowindow.open(map, marker);
                      });
                  } else {
                      console.error("Geocode was not successful for the following reason:", status);
                  }
              });
          });
      })
      .catch((error) => {
          console.error("Error fetching data from the API:", error);
      });
}

// Call the function to populate the table on page load
populateTable();

// Expose the initMap function to the global scope for the Google Maps API callback
window.initMap = initMap;
