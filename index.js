var nouns = [
  'action items',
  'alignments',
  'applications',
  'architectures',
  'bandwidth',
  'benefits',
  'best practices',
  'catalysts for change',
  'channels',
  'clouds',
  'collaboration and idea-sharing',
  'communities',
  'content',
  'convergence',
  'core competencies',
  'customer service',
  'data',
  'deliverables',
  'e-business',
  'e-commerce',
  'e-markets',
  'e-tailers',
  'e-services',
  'experiences',
  'expertise',
  'functionalities',
  'fungibility',
  'growth strategies',
  'human capital',
  'ideas',
  'imperatives',
  'infomediaries',
  'information',
  'infrastructures',
  'initiatives',
  'innovation',
  'intellectual capital',
  'interfaces',
  'internal or "organic" sources',
  'leadership',
  'leadership skills',
  'manufactured products',
  'markets',
  'materials',
  'meta-services',
  'methodologies',
  'methods of empowerment',
  'metrics',
  'mindshare',
  'models',
  'networks',
  'niches',
  'niche markets',
  'nosql',
  'opportunities',
  '"outside the box" thinking',
  'outsourcing',
  'paradigms',
  'partnerships',
  'platforms',
  'portals',
  'potentialities',
  'rocess improvements',
  'processes',
  'products',
  'quality vectors',
  'relationships',
  'resources',
  'results',
  'ROI',
  'scenarios',
  'schemas',
  'services',
  'solutions',
  'sources',
  'strategic theme areas',
  'storage',
  'supply chains',
  'synergy',
  'systems',
  'technologies',
  'technology',
  'testing procedures',
  'total linkage',
  'users',
  'value',
  'vortals',
  'web-readiness',
  'web services',
  'virtualization'
]

var aggregations = [
  'Total',
  'Sum of',
  'Average',
  'Percentage of',
  'Important',
  'Monthly',
  'Weekly',
  'Daily',
  'Quarterly',
  'Yesterday',
  'Today',
]

function pickWord(list) {
  var pick = Math.floor(Math.random() * (list.length -1))
  return list[pick]
}

function generate() {
  return pickWord(aggregations) + ' ' + pickWord(nouns)
}

module.exports = function (numberOfInsights) {
  // if a number is passed to the method then make that many insights
  if (numberOfInsights) {
    var insights = []
    for(var i = 0; i < numberOfInsights; i ++) {
      insights.push(generate())
    }
    return insights
  }
  return generate()
}
