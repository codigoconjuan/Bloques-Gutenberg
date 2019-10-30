<?php
/*
    Plugin Name: Gutenberg Blocks WordCamp GDL 2019
    Plugin URI: 
    Description: Plugin para crear bloques de Gutenberg
    Version: 1.0.0
    Author: Juan De la torre
    Author URI: @JuanDevWP en Twitter
    Text Domain: wcgdl
*/

if ( ! defined( 'ABSPATH' ) ) exit;


/** Registra Bloques Personalizados */
add_action( 'init', 'wcgdl_bloques');

function wcgdl_bloques() {

    // Si gutenberg no esta activado
    if ( !function_exists( 'register_block_type' ) ) {
        return;
    }
    
    // Registrar el archivo script.js para gutenberg
    wp_register_script(
        'wcgdl-editor-script',		// nombre
        plugins_url( 'build/index.js', __FILE__ ),		// archivo script
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),	// dependencias
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ) // version
    );

    // Registrar CSS para el editor (unicamente)
    wp_register_style(
        'wcgdl-editor-styles',								// nombre
        plugins_url( 'build/editor.css', __FILE__ ),	// archivo
        array( 'wp-edit-blocks' ),						// dependencias
        filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )	//version
    );

    // Registrar CSS para el frontend y editor
    wp_register_style(
        'wcgdl-frontend-styles',						// nombre
        plugins_url( 'build/style.css', __FILE__ ),	// CSS 
        array(),									// dependencias
        filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' ) // version
    );

    // Arreglo de Bloques
    $blocks = [
        "wcgdl/integrante",
        "wcgdl/equipo"
    ];

    // Recorrer $blocks y agregar cada uno
	foreach( $blocks as $block ) {
		register_block_type( $block, array(
			'editor_script' => 'wcgdl-editor-script',	// agregar script de editor
			'editor_style' => 'wcgdl-editor-styles',	// agregar estilos de editor
			'style' => 'wcgdl-frontend-styles',	// agregar estilos frontend
		) );	  
    }
    
}

