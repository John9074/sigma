function sendMessage() {
    let name = document.getElementById('nameText').value;
    let email = document.getElementById('nameEmail').value;
    let subject = document.getElementById('nameSubject').value;
    let nameMessage = document.getElementById('nameMessage').value;

    let isNameValid = /^[a-zA-Z]+$/.test(name) && name[0] == name[0].toUpperCase();

    let isEmailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(email);
    let isSubjectValid = /^[a-zA-Zа-яА-Я ]+$/.test(subject);

    let valueName = document.getElementById('name');
    if (!isNameValid) {
        let errorContainer = document.getElementById('errorName');
        if (errorContainer == null) {
            let errorContainer = document.createElement("div");
            errorContainer.setAttribute('id', 'errorName');
            let namePrompt = document.createTextNode('please enter valid name');
            errorContainer.appendChild(namePrompt);
            valueName.appendChild(errorContainer);
        }
    }
    else {
        if (valueName.children.length > 1) {
            valueName.removeChild(valueName.children[1]);
        }
    }

    let valueEmail = document.getElementById('email');
    if (!isEmailValid) {
        let errorContainer = document.getElementById('errorEmail');
        if (errorContainer == null) {
            let errorContainer = document.createElement("div");
            errorContainer.setAttribute('id', 'errorEmail');
            let emailPrompt = document.createTextNode('please enter valid email');
            errorContainer.appendChild(emailPrompt);
            valueEmail.appendChild(errorContainer);
        }
    }
    else {
        if (valueEmail.children.length > 1) {
            valueEmail.removeChild(valueEmail.children[1]);
        }
    }

    let valueSubject = document.getElementById('subject');
    if (!isSubjectValid) {
        let errorContainer = document.getElementById('errorSubject');
        if (errorContainer == null) {
            let errorContainer = document.createElement("div");
            errorContainer.setAttribute('id', 'errorSubject');
            let subjectPrompt = document.createTextNode('please enter valid subject, only letters');
            errorContainer.appendChild(subjectPrompt);
            valueSubject.appendChild(errorContainer);
        }
    }
    else {
        if (valueSubject.children.length > 1) {
            valueSubject.removeChild(valueSubject.children[1]);
        }
    }

    if (!isNameValid || !isEmailValid || !isSubjectValid) {
        return;
    }
    localStorage.nameBox = name;
    localStorage.emailBox = email;
    localStorage.subjectBox = subject;
    localStorage.nameMessageBox = nameMessage;
    if (subject.toLowerCase().indexOf('зробити замовлення') > -1 || subject.toLowerCase().indexOf('сделать заказ') > -1) {
        alert('З вами скоро зв`яжуться!');
    }
}