$( document ).ready(function() {
	var count = 1;
	var discriptionList;
	var imageList;
	
	discriptionList = $("#description dl");
	
	imageList = $("#thumbnail img");
	
	preview(count);
	
	$("#thumbnail img").click( function () {
		count = $(this).attr("id").replace("image", "")
		preview (count);
	});
	
	$("#back").click(function () {
		count--;
		preview(count);
	});
	
	$("#next").click(function () {
		count++;
		preview(count);
	});
	
	function preview (elementNumber) {
		$(imageList).removeClass("border");
		$(discriptionList).addClass("hidden");
		
		if (elementNumber <= 1) {
			$("#back").prop( "disabled", true );
		} else {
			$("#back").prop( "disabled", false );
		}
		
		if (elementNumber >= imageList.length) {
			$("#next").prop( "disabled", true );
		} else {
			$("#next").prop( "disabled", false );
		}
		
		$("#image" + elementNumber).addClass("border");
		$("#disc" + elementNumber).removeClass("hidden");
		$("#preview img").attr("src", $("#image" + elementNumber).attr("src"));
	}
	
});
