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
	localStorage.setItem('email', JSON.stringify("registeremail"));
	localStorage.setItem('password', JSON.stringify("registerpassword"));
    Swal.fire({
        icon: 'success',
        title: 'you have successfully registered'
     })
    event.preventDefault();
}

function Check(){
		var email = document.getElementById("loginemail").value;
		var password = document.getElementById("password").value;
		
		if(localStorage.getItem('email') == email && localStorage.getItem('password')==password) {
			Swal.fire({
				icon: 'success',
				title: 'you have successfully logged in'
			})
		}
		else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please check your password and account name and try again.',
			})
		
		}

		localStorage.clear();
	}
    Event.preventDefault();
function credits(){
	Swal.fire({
		title: '<strong>CREDITS</strong>',
		icon: 'info',
		html:
		  'Made by Aleksandar Obrovac, 4.RA'
	  })

}


