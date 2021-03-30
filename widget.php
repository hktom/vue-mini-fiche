<?php
namespace Vue_Mini_Fiche;

use Elementor\Repeater;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

//include plugin_dir_path( __FILE__ ) . '/vue_map.php';

class Vue_Mini_Fiche extends Widget_Base {

	public static $slug = 'vue_mini_fiche';

	public function get_name() { return self::$slug; }

	public function get_title() { return __('Vue Mini Fiche', self::$slug); }

	public function get_icon() { return 'fas fa-map-marked-alt'; }

	public function get_categories() { return [ 'general' ]; }

	protected function _register_controls() {
		
		//maps
		include plugin_dir_path( __FILE__ ) . 'controllers/maps.php';
		//font
		include plugin_dir_path( __FILE__ ) . 'controllers/font.php';
		//color
		include plugin_dir_path( __FILE__ ) . 'controllers/color.php';
		//icon
		include plugin_dir_path( __FILE__ ) . 'controllers/icon.php';

		include plugin_dir_path( __FILE__ ) . 'controllers/icon_librairies.php';
		
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		include plugin_dir_path( __FILE__ ) . '/index.php';
	}
}