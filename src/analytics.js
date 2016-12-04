/* global ga */
// eslint-disable-next-line max-params
window.trackEvent = function (category, action, label, value) {
	if (window.ga) {
		ga('send', 'event', category, action, label, value);
	}
}

// if online, load after sometime
if (navigator.onLine) {
	setTimeout(function() {

		/* eslint-disable */
		(function(i,s,o,g,r,a,m){
			i['GoogleAnalyticsObject']=r;
			i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-87786708-1', {'cookieDomain': 'none'});
		// required for chrome extension protocol
		ga('set', 'checkProtocolTask', function(){ /* nothing */ });
		ga('send', 'pageview');

		/* eslint-enable */

	}, 0);
}