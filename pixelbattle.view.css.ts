namespace $ {
    const { per } = $mol_style_unit

    $mol_style_define($pixelbattle, {})
    $mol_style_define($mol_book2, {
        flex: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        overflow: 'hidden',
        backgroundColor: '',
        '--lightness': per(0.45),
        '--chroma': per(0.1),
        '--hue': per(186),
    })
}
