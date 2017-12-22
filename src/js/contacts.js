$(document).ready(function () {
    var isFirstSignIn = false,
        $signBtn = $("#signBtn"),
        $phoneInput = $("#phoneInput"),
        $pswInput = $("#pswInput"),
        $btnGroup = $("#btnGroup"),
        $voiceBtn = $("#voiceBtn"),
        $newContactBtn = $("#newContactBtn"),
        $newGroupBtn = $("#newGroupBtn"),
        $progress = $("#progress");

    // 监听登录按钮
    $signBtn.click(function () {
        $progress.removeClass("determinate");
        $progress.addClass("indeterminate");
        $signBtn.removeClass("pulse");
        var phone = $phoneInput.val(),
            phoneNum = parseInt(phone),
            password = $pswInput.val();
        console.log(phoneNum);

        // 如果不是数字或者密码为空, 阻止登录
        if ((phone.length != 11) || isNaN(phoneNum) ||
            (phoneNum < 10000000000) || (password === "")) {
            Materialize.toast("请输入密码和11位的电话号码", 3000);
            $progress.removeClass("indeterminate");        
            $progress.addClass("determinate");            
            $signBtn.addClass("pulse");
            
            return;
        }

    })
})
