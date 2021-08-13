export const siteSettings = {
  type: 'document',
  name: 'siteSettings',
  fields: [
    { type:'string',name:'title' },
    { type:'string',name:'email' },
    { type:'string',name:'studioAddress' },
  ]
}

export const art = {
  type: 'document',
  name: 'art',
  fields: [
    { type:'cloudinary.asset',name:'image' },
    { type:'string',name:'title',description:'artwork name' },
    { type:'boolean',name:'landscape',initialValue:false,description:'landscape?' },
    { type:'date',name:'publishedYear',options:{ dateFormat:'YYYY' },description:'YYYY' },
    { type:'array',name:'tags',of:[{type:'string'}],options:{layout:'tags'} },
    { type:'number',name:'width',description:'in inches' },
    { type:'number',name:'height',description:'in inches' },
    { type:'number',name:'numerOfPaintings' },
  ]
}

export const cv = {
  type: 'document',
  name: 'cv',
  title: 'CV',
  fields: [
    { type:'string',name:'what',description:'event name' },
    { type:'string',name:'tag',options:{ list:['employment','exhibition','education'] } },
    { type:'date',name:'when',options:{ dateFormat: 'YYYY-MMM' },description:'YYYY-Mon' },
    { type:'date',name:'whenEnd',options:{ dateFormat: 'YYYY' },description:'end year, blank if current' },
    { type:'date',name:'whenStart',options:{ dateFormat: 'YYYY' },description:'start' },
    { type:'string',name:'venue',description:'event venue / location' },
    { type:'string',name:'where',description:'city, state' },
  ]
}
