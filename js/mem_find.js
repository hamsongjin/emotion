$(document).ready(function() {
    $(".error_message").hide();

    $('.tab_btn').on('click', function() {
        // console.log('tab');

        // 탭버튼 클릭
        const tabVal = $(this).index();
        console.log('tabVal ??', tabVal);
        $('.tab_btn').removeClass('on');
        $(this).addClass('on')
        // 탭콘텐츠 
        $('.tab_con').removeClass('active');
        $('.tab_con').eq(tabVal).addClass('active');
    })
})
let compilerId = 2;
let compilerName = 2;
let compilerTel = 2;
$("#u_id").on({
    keyup : function() {
        const u_id = $("#u_id").val();

        if(u_id.length == 0) {
            $("#idMsg").hide();
        } else {
            idCompiler(u_id);
        }
    }
});

$('#u_name').on({
    keyup : function() {
        const u_name = $('#u_name').val();
        // console.log('name ?', isName(u_name));
        
    
        if(isName(u_name)) {
            compilerName = 1;
            console.log('compilerName ?', compilerName);
        } else {
            compilerName = 2;
            console.log('compilerName ?', compilerName);
        }
        if(compilerName == 2) {
            $("#name_msg").show();
            $('#u_name').focus();
        }
       
    },
    // id 포커인데 에러일 때
    focus: function() {
        const u_id = $("#u_id").val();
        if(u_id.length == 0) {
            $(".error_message").hide();
        } else {
            $("#name_msg").show();
            idCompiler(u_id);
        }
    }, 
    // id 에러났는데 포커스이동할 때
    blur : function() {
        $(".error_message").hide();
    }
})

$("#u_tel").on('keyup', function() {
    const u_tel = $('#u_tel').val();

    if(isTel(u_tel)) {
        compilerTel = 1;
    } else {
        compilerTel = 2;
    }

    if(compilerTel == 2) {
        $('#tel_msg').show();
        $('#u_tel').val('').focus();
    }
})
// 아이디컴파일
function isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
 
	return regExp.test(asValue);
}
// 이름컴파일
function isName(asValue) {
    var regExp =  /^[ㄱ-ㅎ|가-힣]+$/;

    return regExp.test(asValue);
}
// 휴대전화컴파일
function isTel(asValue) {
    var regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    return regExp.test(asValue);
}
