document.addEventListener('DOMContentLoaded', function() {
    const editableFields = {
        name: document.getElementById('profile-name'),
        location: document.getElementById('location'),
        gender: document.getElementById('gender'),
        dob: document.getElementById('dob'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email')
    };

    const saveBtn = document.getElementById('save-btn');
    let editing = false;

    function enableEditing(fieldId, fieldName) {
        editableFields[fieldName].setAttribute('contenteditable', 'true');
        editableFields[fieldName].focus();
        saveBtn.style.display = 'inline-block';
        editing = true;
    }

    function saveChanges() {
        for (let field in editableFields) {
            editableFields[field].setAttribute('contenteditable', 'false');
        }
        saveBtn.style.display = 'none';
        editing = false;
        alert('Profile changes saved!');
    }

    // Add event listeners to the edit icons
    document.getElementById('edit-name-btn').addEventListener('click', function() {
        enableEditing('profile-name', 'name');
    });

    document.getElementById('edit-location-btn').addEventListener('click', function() {
        enableEditing('location', 'location');
    });

    document.getElementById('edit-gender-btn').addEventListener('click', function() {
        enableEditing('gender', 'gender');
    });

    document.getElementById('edit-dob-btn').addEventListener('click', function() {
        enableEditing('dob', 'dob');
    });

    document.getElementById('edit-phone-btn').addEventListener('click', function() {
        enableEditing('phone', 'phone');
    });

    document.getElementById('edit-email-btn').addEventListener('click', function() {
        enableEditing('email', 'email');
    });

    // Save button event listener
    saveBtn.addEventListener('click', function() {
        if (editing) {
            saveChanges();
        }
    });
});

document.querySelector('.save-btn').addEventListener('click', function() {
    let name = document.querySelector('.profile-info h2').textContent;
    let education = document.querySelectorAll('.education-item h4, .education-item p');
    let preferences = document.querySelectorAll('.preferences-section span');

    let userData = {
        name: name,
        education: [],
        preferences: []
    };

    education.forEach((item, index) => {
        userData.education.push(item.textContent);
    });

    preferences.forEach((item, index) => {
        userData.preferences.push(item.textContent);
    });

    console.log("Saved User Data: ", userData);

    alert("Profile changes saved!");
});

function toggleSkillInput() {
    const skillInput = document.getElementById('add-skill-input');
    skillInput.style.display = skillInput.style.display === 'block' ? 'none' : 'block';
}


function addSkill() {
    const skill = document.getElementById('new-skill').value;
    if (skill) {
        const skillList = document.getElementById('skills-list');
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.innerHTML = skill + ' <span class="remove-skill" onclick="removeSkill(this)">×</span>';
        skillList.appendChild(skillTag);
        document.getElementById('new-skill').value = ''; 
    }
}


function removeSkill(skillElement) {
    skillElement.parentElement.remove();
}


function toggleLanguageInput() {
    const languageInput = document.getElementById('add-language-input');
    languageInput.style.display = languageInput.style.display === 'block' ? 'none' : 'block';
}


function addLanguage() {
    const language = document.getElementById('new-language').value;
    if (language) {
        const languageList = document.getElementById('languages-list');
        const languageTag = document.createElement('span');
        languageTag.className = 'skill-tag';
        languageTag.innerHTML = language + ' <span class="remove-skill" onclick="removeSkill(this)">×</span>';
        languageList.appendChild(languageTag);
        document.getElementById('new-language').value = ''; 
    }
}


function toggleInternshipInput() {
    const internshipInput = document.getElementById('add-internship-input');
    internshipInput.style.display = internshipInput.style.display === 'block' ? 'none' : 'block';
}

function addInternship() {
    const internship = document.getElementById('new-internship').value;
    if (internship) {
        const internshipList = document.getElementById('internship-list');
        const internshipTag = document.createElement('span');
        internshipTag.className = 'skill-tag';
        internshipTag.innerHTML = internship + ' <span class="remove-skill" onclick="removeSkill(this)">×</span>';
        internshipList.appendChild(internshipTag);
        document.getElementById('new-internship').value = ''; 
    }
}
function editField(fieldId) {
    const field = document.getElementById(fieldId);
    
    
    if (field.disabled) {
        field.disabled = false;
        field.focus();
    } else {
        field.disabled = true;
    }
}
function editField(fieldId) {
    const field = document.getElementById(fieldId);
    
   
    if (field.disabled) {
        field.disabled = false;
        field.focus();
    } else {
        field.disabled = true;
    }
}
// Function to enable editing of text areas
function editField(fieldId) {
    const textarea = document.getElementById(fieldId);
    if (textarea.disabled) {
        textarea.disabled = false;
        textarea.focus();
    } else {
        textarea.disabled = true;
    }
}

// Event listener for resume upload label click
const resumeUpload = document.getElementById('resumeUpload');
const uploadLabel = document.querySelector('.upload-label');

uploadLabel.addEventListener('click', function() {
    resumeUpload.click();
});

// You can add more functionality to handle resume uploads, saving text, etc.