$(document).ready(function(){
    var width = $('#container').width();
    console.log(width);
    $('#container div').height(width);

    $('#table')
        var $ongletItems = $(".onglets li") ;
    
		
		$ongletItems.click(function(){
			
			$ongletItems.removeClass("active") ;
			
			$(this).addClass("active") ;
			
			return false ;
			
        });

});
