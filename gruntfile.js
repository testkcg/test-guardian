// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  "use strict";
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),



    injector: {
      css: {
        options: {
          starttag: '<!-- css: -->',
          endtag: '<!-- endcss -->',
          relative: true
        },
        files: {
          'dist/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/slick.css'],
          'dist/homepage_v2/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/slick.css'],
          'dist/business/index.html' : ['dist/assets/css/style.css'],
          'dist/californiasupply/index.html' : ['dist/assets/css/style.css'],
          'dist/careers/index.html' : ['dist/assets/css/style.css'],
          'dist/chemtech/index.html' : ['dist/assets/css/style.css'],
          'dist/companies/index.html' : ['dist/assets/css/style.css'],
          'dist/contact/index.html' : ['dist/assets/css/style.css'],
          'dist/engineering/index.html' : ['dist/assets/css/style.css'],
          'dist/faq/index.html' : ['dist/assets/css/style.css'],
          'dist/fhr/index.html' : ['dist/assets/css/style.css'],
          'dist/finance/index.html' : ['dist/assets/css/style.css'],
          'dist/giving/index.html' : ['dist/assets/css/style.css'],
          'dist/gp/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/slick.css'],
          'dist/invista/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/slick.css'],
          'dist/it/index.html' : ['dist/assets/css/style.css'],
          'dist/kaes/index.html' : ['dist/assets/css/style.css'],
          'dist/kpl/index.html' : ['dist/assets/css/style.css'],
          'dist/kst/index.html' : ['dist/assets/css/style.css'],
          'dist/locations/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/locations.css'],
          'dist/matador/index.html' : ['dist/assets/css/style.css'],
          'dist/minerals/index.html' : ['dist/assets/css/style.css'],
          'dist/molex/index.html' : ['dist/assets/css/style.css'],
          'dist/mrw/index.html' : ['dist/assets/css/style.css'],
          'dist/operations/index.html' : ['dist/assets/css/style.css'],
          'dist/philosophy/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/jqPlotCustom.css'],
          'dist/privacypolicy/index.html' : ['dist/assets/css/style.css'],
          'dist/responsibility/index.html' : ['dist/assets/css/style.css'],
          'dist/supportform/index.html' : ['dist/assets/css/style.css'],
          'dist/termsofuse/index.html' : ['dist/assets/css/style.css'],
          'dist/updatebrowser/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/upgrade_browser.css'],
          'dist/vendors/index.html' : ['dist/assets/css/style.css'],
          'dist/veterans/index.html' : ['dist/assets/css/style.css'],
          'dist/whatwedo/index.html' : ['dist/assets/css/style.css', 'dist/assets/css/what_we_do.css'],
          'dist/404.html' : ['dist/assets/css/style.css']
        }
      },

      headJS: {
        options: {
          starttag: '<!-- HeaderJS: -->',
          endtag: '<!-- endHeaderJS -->',
          relative: true
        },
        files: {
          'dist/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/homepage_v2/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/business/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/californiasupply/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/careers/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/chemtech/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/companies/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/contact/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/engineering/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/faq/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/fhr/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/finance/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/giving/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/gp/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/invista/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/it/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/kaes/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/kpl/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/kst/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/locations/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/matador/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/minerals/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/molex/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/mrw/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/operations/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/philosophy/index.html' : ['dist/assets/js/modernizr.js', 'dist/assets/js/jqPlotCustom.js'],
          'dist/privacypolicy/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/responsibility/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/supportform/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/termsofuse/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/vendors/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/veterans/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/whatwedo/index.html' : ['dist/assets/js/modernizr.js'],
          'dist/404.html' : ['dist/assets/js/modernizr.js']
        }
      },

      footerJS: {
        options: {
          starttag: '<!-- FooterJS: -->',
          endtag: '<!-- endFooterJS -->',
          relative: true
        },
        files: {
          'dist/index.html' : ['dist/assets/js/main.js', 'dist/assets/js/slick.js'],
          'dist/homepage_v2/index.html' : ['dist/assets/js/main.js', 'dist/assets/js/slick.js'],
          'dist/business/index.html' : ['dist/assets/js/main.js'],
          'dist/californiasupply/index.html' : ['dist/assets/js/main.js'],
          'dist/careers/index.html' : ['dist/assets/js/main.js' ],
          'dist/chemtech/index.html' : ['dist/assets/js/main.js'],
          'dist/contact/index.html' : ['dist/assets/js/main.js'],
          'dist/companies/index.html' : ['dist/assets/js/main.js'],
          'dist/engineering/index.html' : ['dist/assets/js/main.js'],
          'dist/faq/index.html' : ['dist/assets/js/main.js'],
          'dist/fhr/index.html' : ['dist/assets/js/main.js'],
          'dist/finance/index.html' : ['dist/assets/js/main.js'],
          'dist/giving/index.html' : ['dist/assets/js/main.js'],
          'dist/gp/index.html' : ['dist/assets/js/main.js', 'dist/assets/js/slick.js'],
          'dist/invista/index.html' : ['dist/assets/js/main.js', 'dist/assets/js/slick.js'],
          'dist/it/index.html' : ['dist/assets/js/main.js'],
          'dist/kaes/index.html' : ['dist/assets/js/main.js'],
          'dist/kpl/index.html' : ['dist/assets/js/main.js'],
          'dist/kst/index.html' : ['dist/assets/js/main.js'],
          'dist/locations/index.html' : ['dist/assets/js/main.js'],
          'dist/matador/index.html' : ['dist/assets/js/main.js'],
          'dist/minerals/index.html' : ['dist/assets/js/main.js'],
          'dist/molex/index.html' : ['dist/assets/js/main.js'],
          'dist/mrw/index.html' : ['dist/assets/js/main.js'],
          'dist/operations/index.html' : ['dist/assets/js/main.js'],
          'dist/philosophy/index.html' : ['dist/assets/js/main.js', 'dist/assets/js/jqPlot.js'],
          'dist/privacypolicy/index.html' : ['dist/assets/js/main.js'],
          'dist/responsibility/index.html' : ['dist/assets/js/main.js'],
          'dist/supportform/index.html' : ['dist/assets/js/main.js'],
          'dist/termsofuse/index.html' : ['dist/assets/js/main.js'],
          'dist/updatebrowser/index.html' : ['dist/assets/js/main.js'],
          'dist/vendors/index.html' : ['dist/assets/js/main.js'],
          'dist/veterans/index.html' : ['dist/assets/js/main.js'],
          'dist/whatwedo/index.html' : ['dist/assets/js/main.js', 'dist/assets/js/skrollr.js'],
          'dist/404.html' : ['dist/assets/js/main.js']
        }
      }
    },



    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          loadPath: require('node-bourbon').includePaths
        },
        files: {                         // Dictionary of files
          'dist/assets/css/jqPlotCustom.css': 'src/assets/css/jqPlotCustom.scss',
          'dist/assets/css/locations.css': 'src/assets/css/locations.scss',
          'dist/assets/css/slick.css': 'src/assets/css/slick.scss',
          'dist/assets/css/style.css': 'src/assets/css/style.scss',
          'dist/assets/css/upgrade_browser.css': 'src/assets/css/upgrade_browser.scss',
          'dist/assets/css/variables_and_mixins.css': 'src/assets/css/variables_and_mixins.scss',
          'dist/assets/css/what_we_do.css': 'src/assets/css/what_we_do.scss',
          'dist/assets/css/icon_font/scss/font-awesome.css': 'src/assets/css/icon_font/scss/font-awesome.scss'
        }
      }
    },



    bake: {
        build: {
            options: {},
            files: {
              "dist/index.html": "src/index.html",
              "dist/homepage_v2/index.html": "src/homepage_v2/index.html",
              "dist/business/index.html": "src/business/index.html",
              "dist/californiasupply/index.html": "src/californiasupply/index.html",
              "dist/careers/index.html": "src/careers/index.html",
              "dist/chemtech/index.html": "src/chemtech/index.html",
              "dist/companies/index.html": "src/companies/index.html",
              "dist/contact/index.html": "src/contact/index.html",
              "dist/engineering/index.html": "src/engineering/index.html",
              "dist/faq/index.html": "src/faq/index.html",
              "dist/fhr/index.html": "src/fhr/index.html",
              "dist/finance/index.html": "src/finance/index.html",
              "dist/giving/index.html": "src/giving/index.html",
              "dist/gp/index.html": "src/gp/index.html",
              "dist/invista/index.html": "src/invista/index.html",
              "dist/it/index.html": "src/it/index.html",
              "dist/kaes/index.html": "src/kaes/index.html",
              "dist/kpl/index.html": "src/kpl/index.html",
              "dist/kst/index.html": "src/kst/index.html",
              "dist/locations/index.html": "src/locations/index.html",
              "dist/matador/index.html": "src/matador/index.html",
              "dist/minerals/index.html": "src/minerals/index.html",
              "dist/molex/index.html": "src/molex/index.html",
              "dist/mrw/index.html": "src/mrw/index.html",
              "dist/operations/index.html": "src/operations/index.html",
              "dist/philosophy/index.html": "src/philosophy/index.html",
              "dist/privacypolicy/index.html": "src/privacypolicy/index.html",
              "dist/responsibility/index.html": "src/responsibility/index.html",
              "dist/supportform/index.html": "src/supportform/index.html",
              "dist/termsofuse/index.html": "src/termsofuse/index.html",
              "dist/updatebrowser/index.html": "src/updatebrowser/index.html",
              "dist/vendors/index.html": "src/vendors/index.html",
              "dist/veterans/index.html": "src/veterans/index.html",
              "dist/whatwedo/index.html": "src/whatwedo/index.html",
              'dist/404.html' : ['src/404.html']
            }
        }
    },



    copy: {
      main: {
        files: [
          {src: ['src/assets/js/jqPlot.js'], dest: 'dist/assets/js/jqPlot.js'},
          {src: ['src/assets/js/location_data.js'], dest: 'dist/assets/js/location_data.js'},
          {src: ['src/assets/js/locations_desktop.js'], dest: 'dist/assets/js/locations_desktop.js'},
          {src: ['src/assets/js/locations_mobile.js'], dest: 'dist/assets/js/locations_mobile.js'},
          {src: ['src/assets/js/main.js'], dest: 'dist/assets/js/main.js'},
          {src: ['src/assets/js/skrollr.js'], dest: 'dist/assets/js/skrollr.js'},
          {src: ['src/assets/js/slick.js'], dest: 'dist/assets/js/slick.js'},
          {src: ['src/assets/images/*'], dest: 'dist/assets/images/*'}
        ]
      }
    },



    watch: {
      sass: {
        files: ['src/assets/css/*.scss'],
        tasks: ['newer:sass'],
        options : { nospawn : true, relative:true }
      },
      bake: {
        files: ['src/**/*.html', 'src/*.html', 'includes/*.html'],
        tasks: ['newer:bake', 'injector']
      },
      copy: {
        files: ['src/assets/js/*.js'],
        tasks: ['newer:copy']
      }
    }
    

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sync');
};
