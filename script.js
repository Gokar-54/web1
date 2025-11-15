document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // لمنع إعادة تحميل الصفحة

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    // بيانات تسجيل دخول ثابتة للتجربة
    const validUsername = "admin";
    const validPassword = "1234";

    if(username === validUsername && password === validPassword){
        alert("تم تسجيل الدخول بنجاح!");
        errorMsg.textContent = "";
        // هنا يمكن إعادة التوجيه لصفحة أخرى
        // window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة!";
    }
});
