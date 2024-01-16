// Function to fetch data from the mock website
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to update data on the page
function updateData(page, data) {
    // Update the content of the page based on the fetched data
    console.log(`Updating data for ${page} page:`, data);
    // Implement your logic to update the page content here
}

// Function to send POST request with form data
async function submitFormData(url, formData) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log('POST Request Result:', result);
    } catch (error) {
        console.error('Error sending POST request:', error);
    }
}

// Mock URLs for fetching data
const mockUrls = {
    attendance: 'http://localhost:3000/attendance',
    newsAndEvents: 'http://localhost:3000/newsAndEvents',
    activities: 'http://localhost:3000/activities',
    coCurricularPositions: 'http://localhost:3000/coCurricularPositions',
    coCurricularApplications: 'http://localhost:3000/coCurricularApplications',
};

// Mock form data for co-curricular applications
const formData = {
    societyName: 'Example Society',
    societyPosition: 'President',
    whySuitable: 'I have relevant experience and skills.',
};

// Fetch and update data for each page
for (const page in mockUrls) {
    const data = await fetchData(mockUrls[page]);
    updateData(page, data);
}

// Send POST request with form data for co-curricular applications
const postUrl = 'http://localhost:3000/submitCoCurricularApplication';
submitFormData(postUrl, formData);