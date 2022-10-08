$(function() { 
    allAreement();
    
});
//all areement
let allAreement = () => {
    $('input:radio[name="all_areement]').on("change", function() {
        console.log("all_areement" );
        // if($('input:radio[name="all_areement]') == "on") {
          
        //     $('input:radio[name = "areement1"]').prop("checked", true);
        // }
    });

}

$(".error_message").hide();

let compilerId = 2;
let compilerPw = 2;

// id 조건 체크
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

// id 조건 확인
const idCompiler = () => {
    const u_id = $("#u_id").val();
    
    if(isEmail(u_id)) {
        compilerId = 1;
    } else {
        compilerId = 2;
    }

    if(compilerId == 2) {
        $("#idMsg").show();
       
    }
}


function isPassword(asValue) {
	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

	return regExp.test(asValue);
}

// function isPassword(asValue) {
// 	var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
 
// 	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
// }

function isPhoneNumber(asValue) {
	var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
 
	return regExp.test(asValue);
}

function isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
 
	return regExp.test(asValue);
}