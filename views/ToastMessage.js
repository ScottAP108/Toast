module.exports = Object.create( Object.assign( {}, require('./__proto__'), {

    Icons: {
        error: require('./templates/lib/error')(),
        success: require('./templates/lib/checkmark')()
    },

    postRender() {

        this.on( 'shown', () => this.status = 'shown' )
        this.on( 'hidden', () => this.status = 'hidden' )

        return this
    },

    teardown() {
        if( this.els.container.classList.contains('success') ) this.els.container.classList.remove('success')
        this.els.message.textContent = ''
        this.els.message.title = ''
        if( this.els.icon.firstChild ) this.els.icon.removeChild( this.els.icon.firstChild )
        this.resolution()
    },

    templateOptions() { 
        console.log( 'templateOptions' )
        console.log( this.type )
        console.log( this.message )
        return { type: this.type, message: this.message, icons: this.Icons } }

} ) )