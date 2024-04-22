import SimpleWrapper from './SimpleWrapper.astro'
import Wave from './background/Wave.astro'
import Blurred from './background/Blurred.astro'
import HeroPic from './background/HeroPic.astro'

export default {
    Simple: SimpleWrapper,
    Background: {
        Wave: Wave,
        Blurred: Blurred,
        HeroPic: HeroPic,
    },
}
