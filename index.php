<link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet">
<style>
    #app {
        margin-top: 0px !important;
    }
</style>
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/main.css" rel="preload" as="style">
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/vendor.css" rel="preload" as="style">

<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/main.js" rel="preload" as="script">
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/vendor.js" rel="preload" as="script">

<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/vendor.css" rel="stylesheet">
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/main.css" rel="stylesheet">

<style>
.mini-fiche-link-icon-button{transition:0.5s}
</style>
<div>
    <noscript><strong>We're sorry but cartographie doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
    <?php
    $height=$settings['height'];
    $fill_color=$settings['fill_color'];
    $border_color=$settings['border_color'];
    $geo_json=$settings['geo_json'];
    $position_lng=$settings['position_lng'];
    $position_lat=$settings['position_lat'];
    $zoom=$settings['zoom'];
    $map_url_style=$settings['map_url_style'];
    $access_token=$settings['access_token'];

    // icon
    $mini_fiche_icon_back_value=$settings['mini_fiche_icon_back_value']['value'];
    $mini_fiche_country_icon=$settings['mini_fiche_country_icon']['value'];
    $mini_fiche_terms_icon=$settings['mini_fiche_terms_icon']['value'];
    $mini_fiche_word_icon=$settings['mini_fiche_word_icon']['value'];
    $mini_fiche_email_icon=$settings['mini_fiche_email_icon']['value'];
    $mini_fiche_link_icon=$settings['mini_fiche_link_icon']['value'];

    $mini_fiche_button_icon=$settings['mini_fiche_button_icon']['value'];

    // icon size
    $mini_fiche_icon_back_size=$settings['mini_fiche_icon_back_size'];
    $mini_fiche_icon_terms_size=$settings['mini_fiche_icon_terms_size'];
    $mini_fiche_icon_button_size=$settings['mini_fiche_icon_button_size'];
    $more_button_size=$settings['more_button_size'];


    echo "
    <div class='app' id='app' class='mt-0' height='$height' fill_color='$fill_color' border_color='$border_color' geo_json='$geo_json' position_lng='$position_lng' position_lat='$position_lat' zoom='$zoom' map_url_style='$map_url_style' access_token='$access_token' mini_fiche_icon_back_value='$mini_fiche_icon_back_value' mini_fiche_terms_icon='$mini_fiche_terms_icon' mini_fiche_word_icon='$mini_fiche_word_icon' mini_fiche_email_icon='$mini_fiche_email_icon' mini_fiche_link_icon='$mini_fiche_link_icon'
    mini_fiche_country_icon='$mini_fiche_country_icon'
    mini_fiche_icon_back_size='$mini_fiche_icon_back_size'
    mini_fiche_icon_terms_size='$mini_fiche_icon_terms_size'
    mini_fiche_icon_button_size='$mini_fiche_icon_button_size'
    mini_fiche_button_icon='$mini_fiche_button_icon'
    more_button_size='$more_button_size'
    >
    
    </div>
    "
    ;?>

</div>
<script src="https://unpkg.com/es6-promise@4.2.4/dist/es6-promise.auto.min.js"></script>
<script src="https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js"></script>
<script>
    window.mapboxSdk = mapboxSdk;
    window.lang = document.getElementsByTagName("html")[0].getAttribute("lang");
    window.height = document.getElementsByClassName("app")[0].getAttribute("height");
    window.fill_color = document.getElementsByClassName("app")[0].getAttribute("fill_color");
    window.border_color = document.getElementsByClassName("app")[0].getAttribute("border_color");
    window.geo_json = document.getElementsByClassName("app")[0].getAttribute("geo_json");
    window.position_lng = document.getElementsByClassName("app")[0].getAttribute("position_lng");
    window.position_lat = document.getElementsByClassName("app")[0].getAttribute("position_lat");
    window.zoom = document.getElementsByClassName("app")[0].getAttribute("zoom");
    window.map_url_style = document.getElementsByClassName("app")[0].getAttribute("map_url_style");
    window.access_token = document.getElementsByClassName("app")[0].getAttribute("access_token");

    // Icon
    window.button_back_icon = document.getElementsByClassName("app")[0].getAttribute("mini_fiche_icon_back_value");
    window.country_registrement_icon = document.getElementsByClassName("app")[0].getAttribute("mini_fiche_country_icon");
    window.category_icon = document.getElementsByClassName("app")[0].getAttribute("mini_fiche_terms_icon");
    
    window.mini_fiche_word_icon = document.getElementsByClassName("app")[0].
    getAttribute("mini_fiche_word_icon");
    
    window.mini_fiche_email_icon = document.getElementsByClassName("app")[0].
    getAttribute("mini_fiche_email_icon");
    
    window.mini_fiche_link_icon = document.getElementsByClassName("app")[0].
    getAttribute("mini_fiche_link_icon");
    
    window.more_button_icon = document.getElementsByClassName("app")[0].
    getAttribute("mini_fiche_button_icon");

    //size
    window.button_back_icon_size = document.getElementsByClassName("app")[0].
    getAttribute("mini_fiche_icon_back_size");
    
    window.mini_fiche_terms_icon_size = document.getElementsByClassName("app")[0].
    getAttribute("mini_fiche_icon_terms_size");
    
    window.button_icon_size = document.getElementsByClassName("app")[0].
    getAttribute("mini_fiche_icon_button_size");
    
    window.more_button_icon_size = document.getElementsByClassName("app")[0].
    getAttribute("more_button_size");



</script>
<script src="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/vendor.js"></script>
<script src="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/main.js"></script>