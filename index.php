<link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet">
<style>
    #app {
        margin-top: 0px !important;
    }
</style>
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/app.a0eeefdf.css" rel="preload" as="style">
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/chunk-vendors.273173a9.css" rel="preload" as="style">

<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/app.f794f46b.js" rel="preload" as="script">
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/chunk-vendors.9d1e26b9.js" rel="preload" as="script">

<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/chunk-vendors.273173a9.css" rel="stylesheet">
<link href="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/css/app.a0eeefdf.css" rel="stylesheet">
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

    echo "
    <div class='app' id='app' class='mt-0' height='$height' fill_color='$fill_color' border_color='$border_color' geo_json='$geo_json' position_lng='$position_lng' position_lat='$position_lat' zoom='$zoom' map_url_style='$map_url_style' access_token='$access_token'>
    
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
</script>
<script src="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/chunk-vendors.9d1e26b9.js"></script>
<script src="<?php echo plugin_dir_url( __DIR__ );?>vue-mini-fiche/js/app.f794f46b.js"></script>