// results
let agreement = document.getElementById('agreement')
let subjectivity = document.getElementById('subjectivity')
let confidence = document.getElementById('confidence');
let irony = document.getElementById('irony');
let lang = document.getElementById('lang');


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let textForm = document.getElementById('url').value
    if (Client.checkForUrl(textForm)) {
        console.log("::: Form Submitted :::")
        postParsedData('http://localhost:8081/sentimentApi', {
                url: textForm
            })
            .then(function (res) {
                agreement.innerHTML = `Agreement: ${res.agreement}`;
                subjectivity.innerHTML = `Subjectivity: ${res.subjectivity}`;
                irony.innerHTML = `Irony: ${res.irony}`;
                lang.innerHTML = `Language: ${res.model}`;
                confidence.innerHTML = `Confidence: ${res.confidence}`;
                console.log(`Credits remained:${res.status.remaining_credits}`)
            })
    } else {
        alert('PLease enter valid URL for article');
    }
}

const postParsedData = async (url = "", data = {}) => {
    console.log('Data sent for analysis:', data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const parsedData = await res.json();
        console.log('Parsed data received:', parsedData)
        return parsedData;
    } catch (err) {
        console.log('error', err);
    }
};

export {
    handleSubmit
}