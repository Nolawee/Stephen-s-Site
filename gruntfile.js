module.exports = function(grunt){
	// Project configuration. 
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			js: {
	    		src: ['assets/js/appear.js', 'assets/js/contact.js', 'assets/js/custom.js', 'assets/js/gmaps.js', 'assets/js/custom.js', 'assets/js/custom.js'],
	    		dest: 'assets/js/website.js',
	    	},
	  	},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
};