const Good = require('./assets/good.gif')
const Hate = require('./assets/hate.gif')
const Natural = require('./assets/natural.gif')
const Excellent = require('./assets/excellent.gif')
const Disappointed = require('./assets/disappointed.gif')
const GoodInactive = require('./assets/good_inactive.png')
const HateInactive = require('./assets/hate_inactive.png')
const NaturalInactive = require('./assets/natural_inactive.png')
const ExcellentInactive = require('./assets/excellent_inactive.png')
const DisappointedInactive = require('./assets/disappointed_inactive.png')
const GoodActive = require('./assets/good_active.png')
const HateActive = require('./assets/hate_active.png')
const NaturalActive = require('./assets/natural_active.png')
const ExcellentActive = require('./assets/excellent_active.png')
const DisappointedActive = require('./assets/disappointed_active.png')

const images = {
  hate: {
    inactive: HateInactive,
    active: HateActive,
    gif: Hate
  },
  disappointed: {
    inactive: DisappointedInactive,
    active: DisappointedActive,
    gif: Disappointed
  },
  natural: {
    inactive: NaturalInactive,
    active: NaturalActive,
    gif: Natural
  },
  good: {
    inactive: GoodInactive,
    active: GoodActive,
    gif: Good
  },
  excellent: {
    inactive: ExcellentInactive,
    active: ExcellentActive,
    gif: Excellent
  },
}

export default images