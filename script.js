var state=false;
function toggle1(){
	if(state){
		document.getElementById("password").setAttribute("type","password");
		state = false;
	}
	else{
		document.getElementById("password").setAttribute("type","text");
		state = true;
	}
}


function Save(){
	var i = document.getElementById("name").value;
	var e = document.getElementById("email").value;
	var p = document.getElementById("password").value;

	if(!/^[a-zA-Z]*$/.test(i)){
		alert("Please enter name only in letters");

	}else{
	Swal.fire({
		icon: 'success',
		title: 'you have successfully registered'
	})
	Event.preventDefault();
	localStorage.setItem('setemail', e);
	localStorage.setItem('setpassword', p);
	}
}

function Check(){
		var email = document.getElementById("loginemail").value;
		var password = document.getElementById("loginpassword").value;
		
		if(localStorage.getItem('setpassword') != password) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please check your password and account name and try again.',
			})
			document.getElementById("loginemail").value=null;
			document.getElementById("loginpassword").value=null;
			Event.preventDefault();

		}
		else {
			Swal.fire({
				icon: 'success',
				title: 'You have successfully logged in'
			})
			Event.preventDefault();
		
		}

		localStorage.clear();
	}
    Event.preventDefault();
function credits(){
	Swal.fire({
		title: '<strong>CREDITS</strong>',
		icon: 'info',
		html:'Made by Aleksandar Obrovac, 4.RA'
	  })

}


