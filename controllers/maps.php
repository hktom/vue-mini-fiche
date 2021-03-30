<?php

$this->start_controls_section(
    'vue_map',
    [
        'label' => __( 'Vue Map Options', self::$slug ),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
    ]
);

$this->add_control(
    'height',
    [
        'label' => __( 'Height', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::NUMBER,
        'input_type' => 'text',
        'placeholder' => __( "height in px", 'self::$slug' ),
        'min' => 100,
        'max' => 9999,
        'default' => 450,
    ]
);

$this->add_control(
    'fill_color',
    [
        'label' => __( 'Color on hover', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'input_type' => 'color',
        'placeholder' => __( '#ffff', 'self::$slug' ),
    ]
);

$this->add_control(
    'border_color',
    [
        'label' => __( 'Country Border Color', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'input_type' => 'color',
        'placeholder' => __( '#ffff', 'self::$slug' ),
    ]
);

$this->add_control(
    'geo_json',
    [
        'label' => __( 'Geo Json Url', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::TEXT,
        'input_type' => 'url',
        'placeholder' => __( 'geo json file url', 'self::$slug' ),
    ]
);


$this->add_control(
    'position_lng',
    [
        'label' => __( 'Position Longitude', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::TEXT,
        'input_type' => 'text',
        'placeholder' => __( "lng", 'self::$slug' ),
        'default' => "21.634121",
    ]
);

$this->add_control(
    'position_lat',
    [
        'label' => __( 'Position Latitude', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::TEXT,
        'input_type' => 'text',
        'placeholder' => __( "lat", 'self::$slug' ),
        'default' => "-2.380922",
    ]
);


$this->add_control(
    'zoom',
    [
        'label' => __( 'Map Zoom', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::NUMBER,
        'input_type' => 'text',
        'placeholder' => __( "starting zoom ex:1", 'self::$slug' ),
        'min' => 0,
        'max' => 10,
        'default' => 2,
    ]
);

$this->add_control(
    'map_url_style',
    [
        'label' => __( 'Map Url Style', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::TEXT,
        'input_type' => 'url',
        'placeholder' => __( 'mapbox url style', 'self::$slug' ),
    ]
);

$this->add_control(
    'access_token',
    [
        'label' => __( 'Token Access', 'self::$slug' ),
        'type' => \Elementor\Controls_Manager::TEXT,
        'input_type' => 'text',
        'placeholder' => __( 'mapbox token access', 'self::$slug' ),
    ]
);
$this->end_controls_section();


?>