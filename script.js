function addLink() {
    const platform = document.getElementById('platform').value;
    const link = document.getElementById('link').value;
    if(platform && link){
        const li = document.createElement('li');
        li.innerHTML = `${platform} - <a href='${link}' target='_blank'>${link}</a> <button onclick='this.parentElement.remove()' style='background:red; color:white; padding:5px; border:none; border-radius:5px;'>حذف</button>`;
        document.getElementById('socialList').appendChild(li);
        document.getElementById('platform').value = '';
        document.getElementById('link').value = '';
    }
}

function addNews() {
    const title = document.getElementById('newsTitle').value;
    const content = document.getElementById('newsContent').value;
    if(title && content){
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `<div><strong>${title}</strong><p>${content}</p></div><button onclick='this.parentElement.remove()' style='background:red; color:white; padding:5px; border:none; border-radius:5px;'>حذف</button>`;
        document.getElementById('newsContainer').appendChild(div);
        document.getElementById('newsTitle').value = '';
        document.getElementById('newsContent').value = '';
    }
}

function saveImages() {
    alert('تم حفظ التعديلات (تجريبي)');
}
