var Max = (function(){

	var pub = {
		init: function(){
			var opt = Gains.options;

			$(opt.form).on('submit', function(e){
				var items = Gains.retrieveValues(opt.form);
				Gains.render(items, opt.list);
				e.preventDefault();
			});
			$(opt.reset).on('click', function(e){
				Gains.clearAllData();
				e.preventDefault();
			});
		}
	};

	var Gains = {
		options: {
			save: '#save',
			reset: '#reset',
			list: '#history',
			form: '#entry'
		},
		init: function() {
			var opt = this.options;
			console.log(opt);
			var that = this;
			$(opt.form).on('submit', function(e){
				var items = that.retrieveValues(opt.form);
				that.render(items, opt.list);
				e.preventDefault();
			});
			$(opt.reset).on('click', function(e){
				that.clearAllData();
				e.preventDefault();
			});
		},
		clearLocalStorage: function() {
			localStorage.clear('items');
		},
		clearHtml: function() {
			$(this.options.list).children().remove();
		},
		clearAllData: function () {
			this.clearLocalStorage();
			this.clearHtml();
		},
		retrieveValues: function (formId) {
			return $(formId).find('input[type="text"]')
				.map(function(i, e){
					return $(e).val();
				});
		},
		construct: function (array) {
			return '<span class="exName">' + array[0] + '</span>' + ': ' + '<span class="reps">' + array[1] + ' reps @ </span>' + '<span class="weight">' + array[2] + '</span>';
		},
		saveToLocalStorage: function (arr) {
		  var items = [];
		  if (localStorage.items) {
		    items = JSON.parse(localStorage.items);
		  }
		  items.push(arr);
		  localStorage.setItem('items', JSON.stringify(items));
		},
		render: function (array, listId) {
			var html = '<li class="list-group-item">' + this.construct(array) + '</li>';
			$(listId).append(html);
			this.saveToLocalStorage(array);
		}
	};

	return pub;

})();

$(document).ready(function(){
		Max.init();
});
