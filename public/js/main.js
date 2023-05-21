// фронтовий js

const formAutors = document.forms.addAutors;
const btnSend = document.querySelector('[name=btnAdd]');
const elAutorList = document.querySelector('.autorsList');

formAutors.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const { data } = await axios.post('/admin', formData);
    
    //elAutorList.innerHTML = formData.get(autorSurname);
    console.log (data.data);
})