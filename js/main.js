$(function(){

	let $bnnNum=0;

	$(".prev").click(function(){
		if($bnnNum<=0) return false;
		$bnnNum--;
			const $book_w=$("#main_image").width();
			$("#main_image ul").animate({left:-$book_w*$bnnNum},500,function(){
					$("#book_roll img").attr("src","image/state_out.png");
					$("#book_roll img").eq($bnnNum).attr("src","image/state_over.png");	
			});
		
	});
	$(".next").click(function(){
		if($bnnNum>=3) return false;
		$bnnNum++;
			const $book_w=$("#main_image").width();
			$("#main_image ul").animate({left:-$book_w*$bnnNum},500,function(){
				$("#book_roll img").attr("src","image/state_out.png");
				$("#book_roll img").eq($bnnNum).attr("src","image/state_over.png");	
			});			
	
	});

		$("#book_roll li a").click(function() {
					const strName = ( $(this).parent().attr("id") );
						slideTarget( strName.substr(3,1) );   
						return false;
				});					
				
					function  slideTarget(n){
						const pos = Number( n ) * - 100+'%';
						$("#main_image ul").animate({left:pos},500,
						function(){
							$("#book_roll img").attr("src","image/state_out.png");
								$("#book_roll img").eq(n).attr("src","image/state_over.png");	
						});
					};

					
					
	// let btnNum=0;
 // const timer = setInterval(function(){ 
	// btnNum++;
		// if(btnNum>3) btnNum=0;
				// $("#book_roll li a").eq(btnNum).trigger("click")
	// },3000);

	
		// $("#main_image ").mouseenter(function(){
		 // clearInterval(timer);
		// });

	
		// $("#main_image ").mouseleave(function(){
		    // timer = setInterval(function(){ 
			// btnNum++;
			// if(btnNum>3) btnNum=0;
						// $("#book_roll li a").eq(btnNum).trigger("click")
			// },3000);
			// });
	
	
});