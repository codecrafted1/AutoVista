// --- Navigation Button Actions ---

// Redirect HOME button (placeholder action)
document.getElementById("dashboard-btn").addEventListener("click", () => {
  console.log("Navigating to Dashboard/Home..."); 
  // window.location.href = "dashboard.html"; 
});

// --- Services Overlay Functionality ---
const docBtn = document.getElementById('doc-btn'); 
const documentationOverlay = document.getElementById("documentationOverlay");
const closeDoc = document.getElementById("closeDoc");

if (docBtn && documentationOverlay && closeDoc) {
    docBtn.addEventListener("click", () => {
      documentationOverlay.style.display = "flex";
    });

    closeDoc.addEventListener("click", () => {
      documentationOverlay.style.display = "none";
    });

    // Close overlay when clicking outside the card
    documentationOverlay.addEventListener("click", (e) => {
      if (e.target === documentationOverlay) documentationOverlay.style.display = "none";
    });

    // Add dummy click handlers for the action buttons inside the vehicle cards
    document.querySelectorAll('.vehicle-actions button').forEach(button => {
        button.addEventListener('click', (e) => {
            const vehicleName = e.target.closest('.vehicle-card').querySelector('h2').textContent;
            if (e.target.classList.contains('test-drive-btn')) {
                alert(`Booking a Test Drive for: ${vehicleName}. Please wait for a call.`);
            } else if (e.target.classList.contains('details-btn')) {
                alert(`Redirecting to details page for: ${vehicleName}.`);
            }
        });
    });

} else {
    console.error("Services (Doc) button or overlay elements not found.");
}


// --- Help Overlay Functionality ---
const helpBtn = document.getElementById('help-btn'); 
const helpOverlay = document.getElementById('helpOverlay');
const closeHelp = document.getElementById('closeHelp');

if (helpBtn && helpOverlay && closeHelp) {
    helpBtn.addEventListener('click', () => {
        helpOverlay.style.display = 'flex';
    });

    closeHelp.addEventListener('click', () => {
        helpOverlay.style.display = 'none';
    });

    // Close overlay when clicking outside the help card
    helpOverlay.addEventListener('click', (e) => {
        if (e.target === helpOverlay) helpOverlay.style.display = 'none';
    });
} else {
    console.error("Help button or overlay elements not found.");
}


// --- Feedback Overlay and Form Functionality ---
const feedbackBtn = document.getElementById('feedback-btn'); 
const feedbackOverlay = document.getElementById('feedbackOverlay');
const closeFeedback = document.getElementById('closeFeedback');
const feedbackForm = document.getElementById('feedbackForm');
const stars = document.querySelectorAll('.stars i');

if (feedbackBtn && feedbackOverlay && closeFeedback && feedbackForm && stars.length > 0) {
    
    // Open/Close Feedback Overlay
    feedbackBtn.addEventListener('click', () => {
        feedbackOverlay.style.display = 'flex';
    });

    closeFeedback.addEventListener('click', () => {
        feedbackOverlay.style.display = 'none';
    });

    feedbackOverlay.addEventListener('click', (e) => {
        if (e.target === feedbackOverlay) feedbackOverlay.style.display = 'none';
    });
    
    // Star Rating Functionality: Fills stars upon click
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Toggle 'active' class for stars up to and including the clicked one
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid'); // Solid star icon
                } else {
                    s.classList.remove('active');
                    s.classList.add('fa-regular'); // Outline star icon
                    s.classList.remove('fa-solid');
                }
            });
        });
    });

    // Feedback Form Submission (Dummy)
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get rating value (number of active/solid stars)
        const rating = document.querySelectorAll('.stars i.active').length;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        console.log(`Feedback from ${name} submitted with rating: ${rating} and message: ${message.substring(0, 30)}...`);

        alert(`Thank you, ${name}! Your ${rating}-star feedback has been submitted.`);
        
        // Close and reset
        feedbackOverlay.style.display = 'none';
        feedbackForm.reset();
        
        // Reset stars to empty outlines
        stars.forEach(s => {
            s.classList.remove('active', 'fa-solid');
            s.classList.add('fa-regular');
        });
    });

} else {
    console.error("Feedback elements not fully found.");
}