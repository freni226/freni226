$(document).ready(function(){
	$('input[type="checkbox"]').each(function(){		
		console.log($(this).next()[0].tagName);
		if(/span/i.test($(this).next()[0].tagName) && this.name){
			$(this).change(function(){
				$('input[type="checkbox"][name="'+this.name+'"]').each(function(){
					$(this)[this.checked?"addClass":"removeClass"]("checked");
				});
			});
			if(this.checked) $(this).addClass("checked");
		}
	})
});	