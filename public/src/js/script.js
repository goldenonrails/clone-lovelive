$(function(){

	/* Animação de scroll do menu */
	let navContents = $('.nav_contents');
	navContents.hide(0);

	let menu = $('.menu_btn');
	let close = $('.close_btn');
	close.hide(0);

	$('.navbtn_box').click(function(){

		navContents.slideToggle('slow');
		menu.toggle(0);
		close.toggle(0)
	})

	/* Animação do botão do menu */
})