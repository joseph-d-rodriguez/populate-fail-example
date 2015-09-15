module.exports = {
    connection: 'foobar_conn',
    autoPK:false,
    autoCreatedAt: false,
    autoUpdatedAt: false,
    tableName: 'lookup',

    attributes: {
        a: {
            columnName: 'code',
            primaryKey: true,
            type: 'integer'
        },

        b: {
            columnName: 'value',
            type: 'string'
        }
    }
}