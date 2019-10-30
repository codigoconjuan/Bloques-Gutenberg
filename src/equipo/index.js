import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, ColorPalette, InspectorControls, getColorObjectByColorValue, getColorClassName } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components'

const TEMPLATE = [
    [ 'core/heading', { placeholder: 'Titulo de Sección' } ],
    [ 'core/columns', {
        columns: 3
    }, [
        [ 'core/column', {}, [
            [ 'wcgdl/integrante' ],
        ] ],
        [ 'core/column', {}, [
            [ 'wcgdl/integrante' ],
        ] ],
        [ 'core/column', {}, [
            [ 'wcgdl/integrante' ],
        ] ]
    ] ],
];

const backgroundColors = [
    {
        name: 'Azul',
        slug: 'azul',
        color: '#0073a8'
    },
    {
        name: 'Azul Oscuro',
        slug: 'azul-oscuro',
        color: '#005075'
    },
    {
        name: 'Negro',
        slug: 'negro',
        color: '#111'
    },
    {
        name: 'Gris',
        slug: 'gris',
        color: '#767676'
    },
    {
        name: 'Blanco',
        slug: 'blanco',
        color: '#FFF'
    }
];

registerBlockType( 'wcgdl/equipo', {
    title: 'Equipo de Trabajo',
    icon: 'welcome-widgets-menus',
    category: 'layout', 
    attributes: {
        colorFondo: {
            type: 'string'
        }, 
        colorHex: {
            type: 'string'
        }
    },
    supports: {
        align: ['wide', 'full']
    },
	edit: (props) => {
        console.log(props);
        // Extraer el contenido desde props
        const { attributes: { colorFondo, colorHex }, setAttributes } = props;

        const onChangeColorFondo = nuevoColor => {
            const color = getColorObjectByColorValue(backgroundColors, nuevoColor);
            const nombreColor = getColorClassName('text', color.name );
            setAttributes({colorFondo: nombreColor});
            setAttributes({colorHex: nuevoColor})
        }

        return(
        
        <>
            <InspectorControls>
                <PanelBody
                    title={'Color de Fondo'}
                    initialOpen={true}
                >
                    <div className="components-base-control">
                        <div className="components-base-control__field">
                            <label className="components-base-control__label">
                                Color de Fondo
                            </label>
                            <ColorPalette 
                                onChange={onChangeColorFondo}
                                value={colorHex}
                            />
                        </div>
                    </div>
                </PanelBody>
            </InspectorControls>
			<div className={colorFondo}>
                <div className="contenedor">
                    <InnerBlocks
                        template={ TEMPLATE }
                        templateLock="all"
                    />
                </div>
			</div>
        </>
		);
	},
	save: (props) => {

        // Extraer el contenido desde props
        const { attributes: { colorFondo }  } = props;

		return (
			<div className={colorFondo}>
                <div className="contenedor">
				    <InnerBlocks.Content />
                </div>
			</div>
		);
	}
} );