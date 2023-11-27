const apiUrl = 'https://consignee.consignc2c.com/api_user.php';
// Replace 'your_secret_api_key' with the actual API key
const apiKey = 'your_secret_api_key';
// Sample data to send in the POST request
const postData = {
    key1: 'value1',
    key2: 'value2'
};
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
    }
})
.then(response => response.json())
.then(data => {
    let delayInMilliseconds = 8000;
    setTimeout(function() {
        Array.from(data.data).forEach((message) => {
        let messages = {title: message.title, description: message.description}
            wholeData(messages)
        });
    }, delayInMilliseconds);
})
.catch(error => {
    console.error('Error:', error);
});