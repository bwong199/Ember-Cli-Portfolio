import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
    	$('.button-collapse').sideNav();
  	}
});
