document.addEventListener('DOMContentLoaded', () => {
    // Resume data localStorage se fetch karen
    const resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');

    // Resume ko show karen
    document.getElementById('name').textContent = resumeData.name || 'No Name Provided';
    document.getElementById('email').textContent = resumeData.email || 'No Email Provided';
    document.getElementById('education').textContent = resumeData.education || 'No Education Provided';
    document.getElementById('work-experience').textContent = resumeData.workExperience || 'No Work Experience Provided';
    document.getElementById('skills').textContent = resumeData.skills || 'No Skills Provided';
});
