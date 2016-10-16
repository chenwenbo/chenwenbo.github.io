jQuery(document).ready(function() {
	var QRBox	=	$('#QRBox');
	var MainBox	=	$('#MainBox');
	var BTCQR	=	'images/BTCQR.png';	// 二维码路径
	var AliPayQR	=	'images/AliPayQR.png';
	var WeChanQR	=	'images/WeChanQR.png';
	// PayPal 账户建议使用 Unicode
	var ppbusiness	=	"\u0073\u0065\u0061\u006c\u006f\u0075\u0072\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d";

	if (!ppitem_name) { ppitem_name	=	"Donate"; }

	function showQR(QR) {
		if (QR) {
			MainBox.css('background-image','url('+QR+')');
		}
		$('#DonateText,#donateBox,#github').addClass('blur');
		QRBox.fadeIn(300,function(argument) {
			MainBox.addClass('showQR');
		});
	}
	//	Buttons
	// $('body').on('click', '#PayPal', function() {
	// 	ppBuy();	// 购买按钮适用于国内的 Paypal 账户
	// 	// ppDonate();	// 捐赠按钮仅适合国外的 PayPal 账户
	// });

	$('#donateBox>li').click(function(event) {
		var thisID	=	$(this).attr('id');
		if (thisID === 'PayPal') {
			ppBuy();
		} else if (thisID === 'BTC') {
			showQR(BTCQR);
			new Clipboard('#BTCBn');
		} else if (thisID === 'AliPay') {
			showQR(AliPayQR);
		} else if (thisID === 'WeChat') {
			showQR(WeChanQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass('showQR').addClass('hideQR');
		setTimeout (function(a) {
			QRBox.fadeOut(300,function(argument) {
				MainBox.removeClass('hideQR');
			});
			$('#DonateText,#donateBox,#github').removeClass('blur');
		},600);

	});
});