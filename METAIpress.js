cube(`METAIpress`, {
  sql: `SELECT * FROM dbo."META_IPRESS"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    renipress: {
      sql: `${CUBE}."RENIPRESS"`,
      type: `string`
    },
    
    nombre: {
      sql: `${CUBE}."NOMBRE"`,
      type: `string`
    },
    
    punto: {
      sql: `${CUBE}."PUNTO"`,
      type: `string`
    },
    
    envio: {
      sql: `${CUBE}."ENVIO"`,
      type: `string`
    },
    
    fase: {
      sql: `${CUBE}."FASE"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
