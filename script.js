// --- تسجيل الدخول / إنشاء حساب ---
function showSignup(){ document.getElementById('loginFormDiv').classList.add('hidden'); document.getElementById('signupFormDiv').classList.remove('hidden'); document.getElementById('authTitle').textContent='إنشاء حساب'; }
function showLogin(){ document.getElementById('signupFormDiv').classList.add('hidden'); document.getElementById('loginFormDiv').classList.remove('hidden'); document.getElementById('authTitle').textContent='تسجيل الدخول'; }

function signup(){
    const username=document.getElementById('newUsername').value;
    const password=document.getElementById('newPassword').value;
    if(username==='admin'){ document.getElementById('signupError').textContent='لا يمكن إنشاء حساب باسم admin'; return; }
    let users=JSON.parse(localStorage.getItem('users')||'[]');
    if(users.find(u=>u.username===username)){ document.getElementById('signupError').textContent='اسم المستخدم موجود مسبقاً'; return; }
    users.push({username,password});
    localStorage.setItem('users',JSON.stringify(users));
    alert('تم إنشاء الحساب بنجاح'); showLogin();
}

function login(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    if(username==='admin' && password==='Azazcvy123@'){ localStorage.setItem('currentUser','admin'); showAdminPanel(); return; }
    let users=JSON.parse(localStorage.getItem('users')||'[]');
    const user=users.find(u=>u.username===username && u.password===password);
    if(user){ localStorage.setItem('currentUser',username); showUserPanel(username); }
    else{ document.getElementById('loginError').textContent='اسم المستخدم أو كلمة المرور خاطئة'; }
}

// --- عرض اللوحات ---
function showUserPanel(username){ document.getElementById('authContainer').classList.add('hidden'); document.getElementById('userPanel').classList.remove('hidden'); document.getElementById('displayUser').textContent=username; }
function showAdminPanel(){ document.getElementById('authContainer').classList.add('hidden'); document.getElementById('adminPanel').classList.remove('hidden'); }

// --- تسجيل الخروج ---
function logout(){ localStorage.removeItem('currentUser'); document.getElementById('adminPanel').classList.add('hidden'); document.getElementById('userPanel').classList.add('hidden'); document.getElementById('authContainer').classList.remove('hidden'); }

// --- إدارة روابط التواصل ---
function addLink(){
    const platform=document.getElementById('platform').value;
    const link=document.getElementById('link').value;
    if(platform && link){
        const li=document.createElement('li');
        li.innerHTML=`${platform} - <a href='${link}' target='_blank'>${link}</a> <button onclick='this.parentElement.remove()' style='background:red;color:white;border:none;border-radius:5px;padding:2px 5px'>حذف</button>`;
        document.getElementById('socialList').appendChild(li);
        document.getElementById('platform').value=''; document.getElementById('link').value='';
    }
}

// --- إدارة الأخبار ---
function addNews(){
    const title=document.getElementById('newsTitle').value;
    const content=document.getElementById('newsContent').value;
    if(title && content){
        const div=document.createElement('div');
        div.className='news-item';
        div.innerHTML=`<div><strong>${title}</strong><p>${content}</p></div><button onclick='this.parentElement.remove()' style='background:red;color:white;border:none;border-radius:5px;padding:2px 5px'>حذف</button>`;
        document.getElementById('newsContainer').appendChild(div);
        document.getElementById('newsTitle').value=''; document.getElementById('newsContent').value='';
    }
}

// --- حفظ الصور (تجريبي) ---
function saveImages(){ alert('تم حفظ الصور (تجريبي)'); }

// --- التحقق عند تحميل الصفحة ---
window.onload=function(){
    const currentUser=localStorage.getItem('currentUser');
    if(currentUser==='admin'){ showAdminPanel(); }
    else if(currentUser){ showUserPanel(currentUser); }
}
