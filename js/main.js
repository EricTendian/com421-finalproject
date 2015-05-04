$(function () {
	$('#instructions figure > a').attr('href', 'javascript:;');

	$('#instructions figure > a').click(function () {
		$('#imageviewer img').attr('src', $(this).find('img').attr('src'));
		$('#imageviewer img').attr('alt', $(this).find('img').attr('alt'));
		$('#imageviewer p').html($(this).parent().find('figcaption').html());
		$('#imageviewer').show();
	});

	$('#instructions #imageviewer').click(function() {
		$(this).hide();
		$(this).find('img').attr('src', '').attr('alt', '');
		$(this).find('p').text('');
	});

	$('.content section').each(function () {
		$('.content p#jumpmenu').append('<a href="#'+$(this).attr('id')+'">'+$(this).find('h2').text()+'</a> | ');
		$('.content p#jumpmenu').show();
	})
});