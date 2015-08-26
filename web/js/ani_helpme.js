$(function(){

	var heleme = new TimelineMax();
		heleme.from('.helpme_kv' ,.5 ,{autoAlpha:0 ,height:0 ,ease:Quart.easeOut})
			  .from('.helpme_kv_prod' ,.5 ,{autoAlpha:0 ,right:-20 ,ease:Linear.easeNone} ,'-=.3')
			  .from('.helpme_kv .title_box' ,.5 ,{autoAlpha:0 ,marginLeft:-30 ,ease:Back.easeOut} ,'-=.5')
			  .staggerFrom(['.qa_num_1','.qa_num_2','.qa_num_3','.qa_num_4','.qa_num_5','.qa_num_6','.qa_num_7'] ,.5 ,{autoAlpha:0 ,top:-60 ,ease:Back.easeOut} ,0.15 ,'-=.5')
			  .from('.helpme_num' ,.5 ,{autoAlpha:0 ,marginLeft:-5 ,ease:Linear.easeNone} ,'-=.8')


});