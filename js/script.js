// Smooth scroll to internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typewriter effect with infinite cycling
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById('name');
    const typewriterElement = document.getElementById('typewriter');

    const terms = [
        'Software Developer',
        'Software Engineer',
        'Data Analyst',
        'Tech Enthusiast',
        'Lifelong Learner'
    ];

    let currentTermIndex = 0;

    // Function to simulate the typewriter effect
    function typeTerm(term, callback) {
        typewriterElement.innerHTML = ''; // Reset content for each new term
        let index = 0;

        // Create typewriter effect
        const interval = setInterval(function () {
            typewriterElement.innerHTML += term[index];
            index++;
            if (index === term.length) {
                clearInterval(interval);
                setTimeout(callback, 1000); // Wait 1 second before starting the next term
            }
        }, 100); // Speed of typing
    }

    // Show the name first for 3 seconds
    setTimeout(function () {
        //nameElement.innerHTML = "Hi I'm XYZ"; // Replace with your name
        setTimeout(function () {
            // After 3 seconds, start typing the first term
            cycleTerms();
        }, 3000); // 3 seconds for your name
    }, 0); // Start immediately on load

    // Function to keep cycling through terms indefinitely
    function cycleTerms() {
        // Start by typing the first term
        typeTerm(terms[currentTermIndex], function () {
            currentTermIndex++;
            if (currentTermIndex >= terms.length) {
                currentTermIndex = 0; // Reset to the first term
            }
            // Continue the cycle
            cycleTerms(); // Recursive call to continue the cycle
        });
    }

    // Function to handle the Send button click event
    //document.addEventListener("DOMContentLoaded", function () {
    //    const sendButton = document.getElementById("sendButton");

    //    if (sendButton) {
    //        sendButton.addEventListener("click", function () {
    //            const name = document.getElementById("name").value;
    //            const email = document.getElementById("email").value;
    //            const message = document.getElementById("message").value;

    //            if (name && email && message) {
    //                const mailtoLink = `mailto:dagatejal@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=Email: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    //                window.location.href = mailtoLink;
    //            } else {
    //                alert("Please fill in all fields before sending.");
    //            }
    //        });
    //    }
    //});

});


//// Smooth scroll to internal links
//document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//    anchor.addEventListener('click', function (e) {
//        e.preventDefault();

//        document.querySelector(this.getAttribute('href')).scrollIntoView({
//            behavior: 'smooth',
//            block: 'start'
//        });
//    });
//});

//// Typewriter effect with infinite cycling
//document.addEventListener("DOMContentLoaded", function () {
//    const nameElement = document.getElementById('name');
//    const typewriterElement = document.getElementById('typewriter');

//    const terms = [
//        'Software Developer',
//        'Software Engineer',
//        'Data Analyst',
//        'Tech Enthusiast',
//        'Lifelong Learner'
//    ];

//    let currentTermIndex = 0;

//    // Function to simulate the typewriter effect
//    function typeTerm(term, callback) {
//        typewriterElement.innerHTML = ''; // Reset content for each new term
//        let index = 0;

//        // Create typewriter effect
//        const interval = setInterval(function () {
//            typewriterElement.innerHTML += term[index];
//            index++;
//            if (index === term.length) {
//                clearInterval(interval);
//                setTimeout(callback, 1000); // Wait 1 second before starting the next term
//            }
//        }, 100); // Speed of typing
//    }

//    // Show the name first for 3 seconds
//    setTimeout(function () {
//        //nameElement.innerHTML = "Hi I'm XYZ"; // Replace with your name
//        setTimeout(function () {
//            // After 3 seconds, start typing the first term
//            cycleTerms();
//        }, 3000); // 3 seconds for your name
//    }, 0); // Start immediately on load

//    // Function to keep cycling through terms indefinitely
//    function cycleTerms() {
//        // Start by typing the first term
//        typeTerm(terms[currentTermIndex], function () {
//            currentTermIndex++;
//            if (currentTermIndex >= terms.length) {
//                currentTermIndex = 0; // Reset to the first term
//            }
//            // Continue the cycle
//            cycleTerms(); // Recursive call to continue the cycle
//        });
//    }
//});
