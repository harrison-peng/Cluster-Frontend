// $(document).ready(function() {
// 	$('a.login-window').click(function() {

// 		// Getting the variable's value from a link
// 		var loginBox = $(this).attr('href');

// 		//Fade in the Popup and add close button
// 		$(loginBox).fadeIn(300);

// 		//Set the center alignment padding + border
// 		var popMargTop = ($(loginBox).height() + 24) / 2;
// 		var popMargLeft = ($(loginBox).width() + 24) / 2;

// 		$(loginBox).css({
// 			'margin-top' : -popMargTop,
// 			'margin-left' : -popMargLeft
// 		});

// 		// Add the mask to body
// 		$('body').append('<div id="mask"></div>');
// 		$('#mask').fadeIn(300);

// 		return false;
// 	});

// 	// When clicking on the button close or the mask layer the popup closed
// 	$('.closed, #mask').on('click', function() {
// 	  $('#mask , .login-popup').fadeOut(300 , function() {
// 		$('#mask').remove();
// 	});
// 	return false;
// 	});
// });

function toIndex() {
    sessionStorage.removeItem('club');
    sessionStorage.removeItem('memberIsInClub');
    sessionStorage.removeItem('portfolio');
}