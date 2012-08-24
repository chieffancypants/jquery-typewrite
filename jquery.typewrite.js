(function ($) {

	$.fn.typewrite = function(text, callback) {
		return this.each(function() {
			$this = $(this);
			var x = 0;
			var intVal = setInterval(function() {
				if ($this.val().indexOf(text) >= 0) {
					clearInterval(intVal);
					if (callback) {
						callback.call();
					}
					return;
				}
				$this.val($this.val() + text.substr(x, 1));
				x++;
			}, 100);
		});
	};

})(jQuery);