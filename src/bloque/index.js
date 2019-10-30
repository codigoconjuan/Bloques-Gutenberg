import {registerBlockType } from '@wordpress/blocks';
import { PlainText, RichText, MediaUpload } from '@wordpress/editor';
import { IconButton } from '@wordpress/components';

registerBlockType('wcgdl/integrante', {
    title: 'Integrante Equipo',
    icon: 'admin-users',
    category: 'layout', // common, formatting, layout, widgets, embed
    attributes: {
        nombre: {
            type: 'string'
        },
        descripcion: {
            type: 'string', 
            source: 'html', 
            selector: '.descripcion'
        }, 
        imagen: {
            type: 'string',
            selector: '.imagen-integrante'
        }
    },
    edit: (props) => {

        // Revisar contenido de props
        console.log(props);

        // Extraer Contenido de Props
        const { attributes: { nombre, descripcion, imagen }, setAttributes } = props;

        // Funciones para leer los contenidos de nuestros componentes
        const onChangeNombre = nuevoNombre => {
            setAttributes({ nombre: nuevoNombre });
        }
        const onChangeTexto = nuevoTexto => {
            setAttributes({ descripcion: nuevoTexto})
        }
        const onSeleccionarImagen = nuevaImagen => {
            setAttributes({ imagen: nuevaImagen.sizes.full.url })
            
        }

        return (
            <div className="integrante">

                <MediaUpload
                    onSelect={onSeleccionarImagen}
                    type="image"
                    render={({open}) => (
                        <IconButton
                            onClick={open}
                            icon="format-image"
                            showTooltip="true"
                            label='Agregar Imagen'
                        /> 
                    )}
                />

                <img class="imagen-integrante" src={imagen} />

                <p className="nombre">
                    <PlainText 
                        placeholder="Agrega el Nombre"
                        onChange={ onChangeNombre }
                        value={ nombre }
                        className="nombre-integrante"
                    />
                </p>

                <p className="descripcion">
                    <RichText
                        placeholder="Texto Integrante"
                        onChange={ onChangeTexto }
                        value={descripcion}
                    />
                </p>
            </div>
 
        )
    },
    save: (props) => {
        console.log(props);

        // Extraer Contenido de Props
        const { attributes: { nombre, descripcion, imagen } } = props;

        return (
            <div className="integrante">
                <img class="imagen-integrante" src={imagen} />
                <p className="nombre">{nombre}</p>
                <p className="descripcion"><RichText.Content value={descripcion} /></p>
            </div>
        )
    }
});
