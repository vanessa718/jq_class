(function($){
	$('.select').on('click', function(){//quand je clique sur l'élément de class select
		$('.row div').addClass('empty'); //j'ajoute la class empty à tous les éléments 
	});									//div enfants des élémnts de class row

	$('.deselect').on('click',function(){//quand je clique sur l'élément de class deselect
		$('.row div').removeClass('empty');//je supprime la class empty à tous les éléments
	});									//div enfants des éléments de class row

	$('.circle').on('click', function(){//quand je clique sur l'élément de class circle
		 $(this).toggleClass('empty');//je supprime ou je rajoute la class empty à cet élément
	});									
										

	$('.square').on('click', function(){//quand je clique sur l'élément de class square, je supprime 
		$square = $(this);

		if($square.hasClass('empty')) {//ou je rajoute la class empty à tous les éléments parents de la ligne
			$square.parents('.row').children('div').removeClass('empty');
		} else {
			$square.parents('.row').children('div').addClass('empty');
		}
		/*
		 Au clic sur un élément qui a la classe square

		 si cet élément a la classe empty
		 	-> je supprime la classe empty sur tous les éléments div enfants du parent class row de l'élément
		 sinon
		 	-> j'ajoute la classe empty sur tous les éléments div enfants du parent class row de l'élément
		*/
	});


})(jQuery);


