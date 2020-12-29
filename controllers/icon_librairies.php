<?php

$this->start_controls_section(
    'Icon_librairies',
    [
        'label' => __( 'Icon Librairies', self::$slug ),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
    ]
);

$this->add_control(
    'mini_fiche_icon_back_value',
    [
        'label' => __( 'Icon', self::$slug ),
        'type' => \Elementor\Controls_Manager::ICONS,
    ]
);


$this->add_control(
    'mini_fiche_country_icon',
    [
        'label' => __( 'Country', self::$slug ),
        'type' => \Elementor\Controls_Manager::ICONS,
    ]
);

$this->add_control(
    'mini_fiche_terms_icon',
    [
        'label' => __( 'Terms', self::$slug ),
        'type' => \Elementor\Controls_Manager::ICONS,
    ]
);

$this->add_control(
    'mini_fiche_word_icon',
    [
        'label' => __( 'Word', self::$slug ),
        'type' => \Elementor\Controls_Manager::ICONS,
    ]
);

$this->add_control(
    'mini_fiche_email_icon',
    [
        'label' => __( 'Email', self::$slug ),
        'type' => \Elementor\Controls_Manager::ICONS,
    ]
);

$this->add_control(
    'mini_fiche_link_icon',
    [
        'label' => __( 'Link', self::$slug ),
        'type' => \Elementor\Controls_Manager::ICONS,
    ]
);

$this->add_control(
    'mini_fiche_button_icon',
    [
        'label' => __( 'Button', self::$slug ),
        'type' => \Elementor\Controls_Manager::ICONS,
    ]
);

$this->end_controls_section();

?>