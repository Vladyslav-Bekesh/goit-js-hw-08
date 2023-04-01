//! IMPORT LIBRARIES ---------
import throttle from 'lodash.throttle';

//! FORM ---------

// --- refs

const refs = {
  form: document.querySelector('.feedback-form'),
  formInput: document.querySelector('input'),
  formtTextarea: document.querySelector('textarea'),
};

// --- events listeners
refs.form.addEventListener('submit', submitingForm);
refs.form.addEventListener('input', throttle(inputForm, 500));

// --- functions
checkStorage();
  const parsedStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

  //* check email
  if (parsedStorage.email !== '') {
    refs.formInput.value = parsedStorage.email;
  }

  //* check textArea
  if (parsedStorage.text !== '') {
    refs.formtTextarea.value = parsedStorage.text;
  }


function checkStorage() {}

function submitingForm(event) {
  event.preventDefault();

  if ((refs.formInput.value !== '' && refs.formtTextarea.value !== '')) {
    localStorage.removeItem('feedback-form-state');

    //* logging form data
    const formData = {
      email: refs.formInput.value,
      text: refs.formtTextarea.value,
    };
    console.dir(formData);

    //* clear fields
    refs.formInput.value = '';
    refs.formtTextarea.value = '';
    return;
  }
  alert("fill all fields")
}

function inputForm() {
  //* write fields values
  const formStates = {
    email: refs.formInput.value,
    text: refs.formtTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formStates));
}

