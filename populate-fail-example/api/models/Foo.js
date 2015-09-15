module.exports = {
  connection:'foobar_conn',
  tableName:'data',
  autoPK:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    v: {
      type:'float',
      columnName:'value',
    },

    x_id: {
      type: 'integer',
      columnName:'lookup_id',
      model: 'Bar'
    }
  }
};