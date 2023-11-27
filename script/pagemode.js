const darkmode = (event) => {
    const body = document.body.classList;
    body.toggle('light-mode');
    body.toggle('dark-mode');
    if(body.contains('dark-mode')){
        event.target.textContent = 'Disable Dark Mode';
    }else{
        event.target.textContent = 'Enable Dark Mode';
    }
}

const tab_title = (event, tab) => {
    const selectedTab = document.querySelector('.selected-tab');
    selectedTab.classList.remove('selected-tab')
    event.target.classList.add('selected-tab')
    const active = document.querySelector('.tab-content-actv')
    active.classList.remove('tab-content-actv');
    const table = document.querySelector(`#${tab}`).classList.add('tab-content-actv')
}

function showMenu(){
    document.querySelector('.nav-list').classList.toggle('nav-hidden')
}