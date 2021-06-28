cube(`DISTRIBUCIONGeograficaMeta`, {
  sql: `SELECT * FROM dbo."DISTRIBUCION_GEOGRAFICA_META"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
	  meta:{
		  type:`sum`,
	  sql:`META`}
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
