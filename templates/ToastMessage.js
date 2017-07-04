module.exports = ( { opts } ) => {
    console.log( 'toast message template' )
    console.log( opts )
    return `` +
`<div>
    <div data-js="icon"></div>
    <div>
        <div data-js="title"></div>
        <div data-js="message"></div>
    </div>
</div>`

}