cube(`DISTRIBUCIONGeografica`, {
  sql: `SELECT * FROM dbo."DISTRIBUCION_GEOGRAFICA"`,
  
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
    
    distrito: {
      sql: `${CUBE}."DISTRITO"`,
      type: `string`
    },
    
    provincia: {
      sql: `${CUBE}."PROVINCIA"`,
      type: `string`
    },
    
    ubigeoProvincia: {
      sql: `${CUBE}."UBIGEO_PROVINCIA"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
