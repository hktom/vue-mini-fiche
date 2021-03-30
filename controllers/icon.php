<?php

$this->start_controls_section(
    'icon_back',
    [
        'label' => __( 'Icon Back', self::$slug ),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
    ]
);		

$this->add_control(
    'icon_back_color',
    [
        'label' => __( 'Color', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-icon-back-color' => 'color: {{VALUE}}',
        ],
    ]
    );

    $this->add_control(
        'icon_back_bg_color',
        [
            'label' => __( 'Background', self::$slug ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'scheme' => [
                'type' => \Elementor\Scheme_Color::get_type(),
                'value' => \Elementor\Scheme_Color::COLOR_1,
            ],
            'selectors' => [
                '{{WRAPPER}} .mini-fiche-icon-back-color' => 'background-color: {{VALUE}}',
            ],
        ]
        );

        $this->add_control(
            'mini_fiche_icon_back_size',
            [
                'label' => __( 'Size', self::$slug ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'h1',
                'options' => [
                    'h1'  => __( 'XX-Large', self::$slug ),
                    'h2' => __( 'X-Large', self::$slug ),
                    'h3' => __( 'Large', self::$slug ),
                    'h4' => __( 'Medium', self::$slug ),
                    'h5' => __( 'Small', self::$slug ),
                    'h6' => __( 'Very Small', self::$slug ),
                    
                ],
            ]
        );

$this->end_controls_section();


$this->start_controls_section(
    'terms_icon',
    [
        'label' => __( 'Icon Terms', self::$slug ),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
    ]
);		

$this->add_control(
    'icon_terms_color',
    [
        'label' => __( 'Color', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .terms-icon-style' => 'color: {{VALUE}}',
        ],
    ]
    );

    $this->add_control(
        'icon_terms_bg_color',
        [
            'label' => __( 'Background', self::$slug ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'scheme' => [
                'type' => \Elementor\Scheme_Color::get_type(),
                'value' => \Elementor\Scheme_Color::COLOR_1,
            ],
            'selectors' => [
                '{{WRAPPER}} .terms-icon-style' => 'background-color: {{VALUE}}',
            ],
        ]
        );

        $this->add_control(
            'mini_fiche_icon_terms_size',
            [
                'label' => __( 'Size', self::$slug ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'h1',
                'options' => [
                    'h1'  => __( 'XX-Large', self::$slug ),
                    'h2' => __( 'X-Large', self::$slug ),
                    'h3' => __( 'Large', self::$slug ),
                    'h4' => __( 'Medium', self::$slug ),
                    'h5' => __( 'Small', self::$slug ),
                    'h6' => __( 'Very Small', self::$slug ),
                    
                ],
            ]
        );

$this->end_controls_section();


$this->start_controls_section(
    'icon_button',
    [
        'label' => __( 'Icon Button', self::$slug ),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
    ]
);		

$this->add_control(
    'icon_button_color',
    [
        'label' => __( 'Color', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-link-icon-button' => 'color: {{VALUE}}',
        ],
    ]
);

    $this->add_control(
        'icon_button_bg_color',
        [
            'label' => __( 'Background', self::$slug ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'scheme' => [
                'type' => \Elementor\Scheme_Color::get_type(),
                'value' => \Elementor\Scheme_Color::COLOR_1,
            ],
            'selectors' => [
                '{{WRAPPER}} .mini-fiche-link-icon-button' => 'background-color: {{VALUE}}',
            ],
        ]
    );

    $this->add_control(
        'color_hover',
        [
            'label' => __( 'Hover', 'plugin-name' ),
            'type' => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );

    // Hover

    $this->add_control(
        'icon_button_color_hover',
        [
            'label' => __( 'Color', self::$slug ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'scheme' => [
                'type' => \Elementor\Scheme_Color::get_type(),
                'value' => \Elementor\Scheme_Color::COLOR_1,
            ],
            'selectors' => [
                '{{WRAPPER}} .mini-fiche-link-icon-button:hover' => 'color: {{VALUE}}',
            ],
        ]
    );
    
        $this->add_control(
            'icon_button_bg_color_hover',
            [
                'label' => __( 'Background', self::$slug ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'scheme' => [
                    'type' => \Elementor\Scheme_Color::get_type(),
                    'value' => \Elementor\Scheme_Color::COLOR_1,
                ],
                'selectors' => [
                    '{{WRAPPER}} .mini-fiche-link-icon-button:hover' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'mini_fiche_icon_button_size',
            [
                'label' => __( 'Size', self::$slug ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'h1',
                'options' => [
                    'h1'  => __( 'XX-Large', self::$slug ),
                    'h2' => __( 'X-Large', self::$slug ),
                    'h3' => __( 'Large', self::$slug ),
                    'h4' => __( 'Medium', self::$slug ),
                    'h5' => __( 'Small', self::$slug ),
                    'h6' => __( 'Very Small', self::$slug ),
                    
                ],
            ]
        );

$this->end_controls_section();

$this->start_controls_section(
    'more_button',
    [
        'label' => __( 'More Button', self::$slug ),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
    ]
);		

$this->add_control(
    'more_button_color',
    [
        'label' => __( 'Color', self::$slug ),
        'type' => \Elementor\Controls_Manager::COLOR,
        'scheme' => [
            'type' => \Elementor\Scheme_Color::get_type(),
            'value' => \Elementor\Scheme_Color::COLOR_1,
        ],
        'selectors' => [
            '{{WRAPPER}} .mini-fiche-button' => 'color: {{VALUE}}',
        ],
    ]
    );

    $this->add_control(
        'more_button_bg',
        [
            'label' => __( 'Background', self::$slug ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'scheme' => [
                'type' => \Elementor\Scheme_Color::get_type(),
                'value' => \Elementor\Scheme_Color::COLOR_1,
            ],
            'selectors' => [
                '{{WRAPPER}} .mini-fiche-button' => 'background-color: {{VALUE}}',
            ],
        ]
        );

        $this->add_control(
            'more_button_size',
            [
                'label' => __( 'Size', self::$slug ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'h1',
                'options' => [
                    'h1'  => __( 'XX-Large', self::$slug ),
                    'h2' => __( 'X-Large', self::$slug ),
                    'h3' => __( 'Large', self::$slug ),
                    'h4' => __( 'Medium', self::$slug ),
                    'h5' => __( 'Small', self::$slug ),
                    'h6' => __( 'Very Small', self::$slug ),
                    
                ],
            ]
        );

$this->end_controls_section();
?>