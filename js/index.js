$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
    var num=0;
    setInterval(function () {
        num++;
        if(num==4){
            num=0
        }
        $('.main4 p').each(function () {
            $('.main4 p').css('transform','scale(1)').eq(num).css('transform','scale(1.15)');
        })
    },800)
})