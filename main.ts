import { jsPDF } from 'jspdf';

// Form handling
const form = document.getElementById('resume-form') as HTMLFormElement;
const shareableLink = document.getElementById('shareable-link') as HTMLParagraphElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username')?.toString() || '';

    // URL generate karen username se
    const uniqueUrl = `https://${username}.vercel.app/resume`;

    // Shareable link display karen
    shareableLink.innerHTML = `Share your resume: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;

    // Local storage me save karna (resume data ko)
    const resumeData = {
        name: formData.get('name')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        education: formData.get('education')?.toString() || '',
        workExperience: formData.get('work-experience')?.toString() || '',
        skills: formData.get('skills')?.toString() || ''
    };
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
});

// PDF download
const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement;
downloadButton.addEventListener('click', () => {
    const doc = new jsPDF();

    const resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    doc.text('Resume', 10, 10);
    doc.text('Name: ' + resumeData.name, 10, 20);
    doc.text('Email: ' + resumeData.email, 10, 30);
    doc.text('Education: ' + resumeData.education, 10, 40);
    doc.text('Work Experience: ' + resumeData.workExperience, 10, 50);
    doc.text('Skills: ' + resumeData.skills, 10, 60);

    doc.save('resume.pdf');
});
