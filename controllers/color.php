<?php

$this->start_controls_section(
    'mini_fiche_color',
    [
        'label' => __( 'Color', self::$slug ),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
    ]
);

$this->add_control(
    'title_color',
    [
        'label' => __( 'Title', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-title' => 'color: {{VALUE}}',
        ],
    ]
);

$this->add_control(
    'categories_color',
    [
        'label' => __( 'Categories', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-categories' => 'color: {{VALUE}}',
        ],
    ]
);

$this->add_control(
    'categories_color_count',
    [
        'label' => __( 'Categories Count', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-categories-count' => 'color: {{VALUE}}',
        ],
    ]
);


$this->add_control(
    'mini_fiche_label_color',
    [
        'label' => __( 'Label', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-label' => 'color: {{VALUE}}',
        ],
    ]
);

$this->add_control(
    'mini_fiche_content_color',
    [
        'label' => __( 'Content', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-content' => 'color: {{VALUE}}',
        ],
    ]
);

$this->add_control(
    'mini_fiche_button_color',
    [
        'label' => __( 'Bouton', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-more-button' => 'color: {{VALUE}}',
        ],
    ]
);


$this->end_controls_section();

?>