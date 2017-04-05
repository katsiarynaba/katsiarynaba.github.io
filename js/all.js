$( '#menu > li > a' ).click( toggleMenu );


		 
		$(".navigation a").click(function(){

			console.log("clicked: " + $(this).attr('id'));
			
			showContent($(this).attr('id'))
		});


		function toggleMenu( ) {
			console.log( $( this ).next( ) );

			$( this ).next( ).slideToggle( 100 );

		}


		function showContent(id) {
			// hide all content sections
			$(".portfolio-item").hide();

			// show the one with  content-[id]
			$("#content-" + id).show();
		}

		// show the first content section
		showContent('solaris');