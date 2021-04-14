<?php
/**
 * Plugin Name: Vue Mini Fiche
 * Description: Display mini Fiche
 * Plugin URI:  https://github.com/hktom/elementor-map-listing-post
 * Version:     3.0.0
 * Author:      Tom Hikari
 * Author URI:  https://github.com/hktom/
 * Text Domain: vue-mini-fiche
 */
namespace Vue_Mini_Fiche;
use Elementor\Plugin;
//include(dirname(__FILE__)."/assets.php");

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// The Widget_Base class is not available immediately after plugins are loaded, so
// we delay the class' use until Elementor widgets are registered
add_action( 'elementor/widgets/widgets_registered', function() {
	require_once('widget.php');

	$vue_mini_fiche =	new Vue_mini_fiche();

	// Let Elementor know about our widget
	Plugin::instance()->widgets_manager->register_widget_type($vue_mini_fiche);
});

