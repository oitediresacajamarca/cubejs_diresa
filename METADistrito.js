cube(`METADistrito`, {
  sql: `SELECT * FROM dbo."META_DISTRITO"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    ubigeo: {
      sql: `${CUBE}."UBIGEO"`,
      type: `string`
    },
    
    grupoMeta: {
      sql: `${CUBE}."GRUPO_META"`,
      type: `string`
    },
    
    grupoRiesgo: {
      sql: `${CUBE}."GRUPO_RIESGO"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
