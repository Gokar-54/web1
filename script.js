// عرض/إخفاء تسجيل الدخول / إنشاء حساب
function showSignup(){
    document.getElementById('loginFormDiv').classList.add('hidden');
    document.getElementById('signupFormDiv').classList.remove('hidden');
    document.getElementById('authTitle').textContent='إنشاء حساب';
}
function showLogin(){
    document.getElementById('signupFormDiv').classList.add('hidden');
    document.getElementById('loginFormDiv').classList.remove('hidden');
    document.getElementById('authTitle').textContent='تسجيل الدخول';
}

// إنشاء حساب
function signup(){
    const username=document.getElementById('newUsername').value;
    const password=document.getElementById('newPassword').value;
    if(username==='admin'){
        document.getElementById('signupError').textContent='لا يمكن إنشاء حساب باسم admin';
        return;
    }
    let users=JSON.parse(localStorage.getItem('users')||'[]');
    if(users.find(u=>u.username===username)){
        document.getElementById('signupError').textContent='اسم المستخدم موجود مسبقاً';
        return;
    }
    users.push({username,password});
    localStorage.setItem('users',JSON.stringify(users));
    alert('تم إنشاء الحساب بنجاح');
    showLogin();
}

// تسجيل الدخول
function login(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    if(username==='admin' && password==='Azazcvy123@'){
        localStorage.setItem('currentUser','admin');
        showAdminPanel(); 
        return;
    }
    let users=JSON.parse(localStorage.getItem('users')||'[]');
    const user=users.find(u=>u.username===username && u.password===password);
    if(user){
        localStorage.setItem('currentUser',username);
        showUserPanel(username);
    } else {
        document.getElementById('loginError').textContent='اسم المستخدم أو كلمة المرور خاطئة';
    }
}

// عرض لوحة المستخدم
function showUserPanel(username){
    document.getElementById('authContainer').classList.add('hidden');
    document.getElementById('userPanel').classList.remove('hidden');
    document.getElementById('displayUser').textContent=username;
}

// عرض لوحة الأدمن
function showAdminPanel(){
    document.getElementById('authContainer').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
}

// تسجيل الخروج
function logout(){
    localStorage.removeItem('currentUser');
    document.getElementById('adminPanel').classList.add('hidden');
    document.getElementById('userPanel').classList.add('hidden');
    document.getElementById('authContainer').classList.remove('hidden');
}

// التحقق عند تحميل الصفحة إذا كان مستخدم مسجل الدخول مسبقاً
window.onload=function(){
    const currentUser=localStorage.getItem('currentUser');
    if(currentUser==='admin'){
        showAdminPanel();
    }
    else if(currentUser){
        showUserPanel(currentUser);
    }
}
