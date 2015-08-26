var q1=0,q2=0,q3=0,q4=0,q5=0,q6=0,q7=0;
var r1=0,r2=0,r3=0;
var current_q=0;
$(function(){
	 $(".helpme_results_1").hide();
	 $(".helpme_results_2").hide();
	 $(".helpme_results_3").hide();
		   stat();
 $(".qa_row label").click(function(){
	if($("#"+$(this).attr("for")).prop("disabled") && q7==0){
		alert('請依序回答問題！');
	}else{
	}
 });
 $(".qa_num_1 input").click(function(){
	if(q1==0) current_q=1;
	 q1=parseInt($(this).val());
	 stat();
 });
$(".qa_num_2 input").click(function(){
	 if(q2==0) current_q=2;
	 q2=parseInt($(this).val());
	 stat();
 });
$(".qa_num_3 input").click(function(){
     if(q3==0) current_q=3;
	 q3=parseInt($(this).val());
	 stat();
 });
$(".qa_num_4 input").click(function(){
	if(q4==0) current_q=4;
	 q4=parseInt($(this).val());
	 stat();
 });
$(".qa_num_5 input").click(function(){
	if(q5==0) current_q=5;
	 q5=parseInt($(this).val());
	 stat();
 });
$(".qa_num_6 input").click(function(){
	 if(q6==0) current_q=6;
	 q6=parseInt($(this).val());
	 stat();
 });
$(".qa_num_7 input").click(function(){
	if(q7==0) current_q=7;
	 q7=parseInt($(this).val());
	 stat();
	 showresult();
 });

})
function showresult(){
var m1=1,m2=1,m3=1,m4=1;
 if(q1==1) m1=2;
 if(q1==2) m2=2;
 if(q1==3) m3=2;
 if(q1==4) m4=2;
 
 if(q2==1){
	 r1=3;r2=2;r3=1;
 }else{
	 r1=1;r2=2;r3=3;
 }
 if(q3==1){
	 r1 +=3*m3;r2 +=2*m3;r3 +=3*m3;
 }else{
	 r1 +=1*m3;r2 +=2*m3;r3 +=1*m3;
 }
 if(q4==1){
	 r1 +=1;r2 +=3;r3 +=2;
 }else{
	 r1 +=3;r2 +=1;r3 +=2;
 }
 if(q5==1){
	 r1 +=1*m2;r2 +=3*m2;r3 +=1*m2;
 }else{
	 r1 +=3*m2;r2 +=1*m2;r3 +=1*m2;
 }
 if(q6==1){
	 r1 +=3*m4;r2 +=1*m4;r3 +=1*m4;
 }else{
	 r1 +=2*m4;r2 +=3*m4;r3 +=3*m4;
 }
 if(q7==2){
	 r1 +=3*m1;r2 +=1*m1;r3 +=3*m1;
 }else if(q7==3){
	 r1 +=1*m1;r2 +=3*m1;r3 +=2*m1;
 }else if(q7==4){
	 r1 +=1*m1;r2 +=3*m1;r3 +=1*m1;
 }
  $(".helpme_results_title").show();
 if(r1>=r2 && r1>=r3){
	 $(".helpme_results_1").show();
	 $(".helpme_results_2").hide();
	 $(".helpme_results_3").hide();
 }else if(r2>=r1 && r2>=r3){
	 $(".helpme_results_1").hide();
	 $(".helpme_results_2").show();
	 $(".helpme_results_3").hide();
 }else if(r3>=r1 && r3>=r2){
	 $(".helpme_results_1").hide();
	 $(".helpme_results_2").hide();
	 $(".helpme_results_3").show();
 }else{
	 $(".helpme_results_1").hide();
	 $(".helpme_results_2").hide();
	 $(".helpme_results_3").hide(); 
 }
		   $(".qa_row").find("input[type='radio']").each(function(){
			 $(this).attr("disabled",true);
			});
		   setTimeout(function(){
							   TweenMax.to('body,html' ,.8 ,{scrollTop: $('.helpme_results').offset().top ,ease:Quart.easeOut});
							   },500);
 //console.log(r1+'--'+r2+'--'+r3);
}
function stat(){
	for(var i=0;i<7;i++){
	   if(i<=current_q-1){
		   //$(this).removeClass("active").addClass("visited");
	   }else if(i==current_q){
		   //$(this).removeClass("visited").addClass("active");
		   $(".qa_row").eq(i).find("input[type='radio']").each(function(){
																		  $(this).attr("disabled",false);
																		 });
		   if(current_q>0){
		   TweenMax.to('body,html' ,.8 ,{scrollTop: $('.qa_num_'+(current_q+1)).offset().top ,ease:Quart.easeOut});
		   }
	   }else{
		   //$(this).removeClass("active").removeClass("visited");
		   $(".qa_row").eq(i).find("input[type='radio']").each(function(){
																		 $(this).attr("disabled",true);
																		 });
	   }
	   
	    
	}
	  //console.log(q1+'-'+q2+'-'+q3+'-'+q4+'-'+q5+'-'+q6+'-'+q7);
}