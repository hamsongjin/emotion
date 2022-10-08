

$(".error_message").hide();
// $('.caps_message').hide();

function checkCapsLock(event)  {
    if (event.getModifierState("CapsLock")) {
        $('.caps_message').show();
    }
  }

let compilerId = 2;
let compilerPw = 2;

// id 조건 체크
$("#u_id").on({
    keyup: function() {
        
        const u_id = $("#u_id").val();
        if(u_id.length == 0) {
            $(".error_message").hide();
        } else {
            idCompiler();
        }

    },
    // id 포커인데 에러일 때
    focus: function() {
        const u_id = $("#u_id").val();
        if(u_id.length == 0) {
            $(".error_message").hide();
        } else {
            idCompiler();
        }
    }, 
    // id 에러났는데 포커스이동할 때
    blur : function() {
        $(".error_message").hide();
    }
});


// pw값 입력할 때
$("#u_pw").on({
    keyup : function(event) {
        // checkCapsLock(event);
        const u_pw = $("#u_pw").val();

        if (event.getModifierState("CapsLock")) {
            console.log("x >>", x);
        } else if(u_pw.length == 0) {
            $(".error_message").hide();
        } else {
            // 조건체크
            console.log("Caps Lock off.");
            pwCompiler();
        } 
    },

    // pw 포커스인데 에러일 때
    focus : function() {
        const u_pw = $("#u_pw").val();
        if(u_pw.length == 0) {
            $(".error_message").hide();
        } else {
            pwCompiler();
        }
    }, 
    // pw 에러나고 포커스 이동할 때
    blur : function() {
        $(".error_message").hide();
    }
});



// id 조건확인
const idCompiler = () => {
    const u_id = $("#u_id").val();
    // isEmail(u_id);
    if(isEmail(u_id)) {
        compilerId = 1;
    } else {
        compilerId = 2;
    }
    if(compilerId == 2) {
        $(".error_message").hide();
        $("#idMsg").show();
    } else {
        $(".error_message").hide();
    }
    
    console.log("isEmail(u_id) ??" , isEmail(u_id) );
    console.log("compilerId ??", compilerId);
}

// pw 조건 확인
const pwCompiler = () => {
    const u_pw = $("#u_pw").val();
    isPassword(u_pw);
    if(isPassword(u_pw)) {
        compilerPw = 1;
    } else {
        compilerPw = 2;
    }
    console.log("compilerPw ??", compilerPw);

    if(compilerPw == 2) {
        $(".error_message").hide();
        $("#err_pw").show();
    } else {
        $(".error_message").hide();
    }
}

// submit 눌렀을 때
$("#sj_submit").on("click", function() {
    const u_id = $("#u_id").val();
    const u_pw = $("#u_pw").val();
    console.log("u_id, u_pw",u_id,u_pw );

    // 값이 빈값일 때
    if(u_id.length == 0) {
        $("#u_id").focus();
        $(".error_message").hide();
        $("#null_id").show();

    } else if(u_pw.lenth == 0) {
        $("#u_pw").focus();
        $(".error_message").hide();
        $("#null_pw").show();

    } 
    
    // 조건 확인
    if(compilerId === 1 && compilerPw === 1 ) {
        alert("정상");
    } else {
        alert("비정상");
    }
});


// function isId(asValue) {
// 	var regExp = /^[a-z]+[a-z0-9]{5,12}$/g;

// 	return regExp.test(asValue);
// }

// function isPassword(asValue) {
// 	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

// 	return regExp.test(asValue);
// }

function isPassword(asValue) {
	var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
 
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

// function isPhoneNumber(asValue) {
// 	var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
 
// 	return regExp.test(asValue);
// }

function isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
 
	return regExp.test(asValue);
}


