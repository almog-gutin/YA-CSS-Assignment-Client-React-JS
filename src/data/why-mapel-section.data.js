import WhyMapelItem from '../models/why-mapel-item.model';

import { ReactComponent as BoxDeliverySVG } from '../assets/svgs/why-mapel-section/iconfinder-5253078-box-delivery-product-icon.svg';
import { ReactComponent as ManSVG } from '../assets/svgs/why-mapel-section/iconfinder-3552239-chat-conversation-formal-male-man-icon.svg';
import { ReactComponent as ShieldSVG } from '../assets/svgs/why-mapel-section/iconfinder-731069-safe-sheald-trust-verification-icon.svg';

const WHY_MAPEL_DATA = [
    new WhyMapelItem('משלוח מהיר', '', BoxDeliverySVG),
    new WhyMapelItem(
        'שירות',
        'נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט',
        ManSVG
    ),
    new WhyMapelItem('מהימן', '', ShieldSVG),
];

export default WHY_MAPEL_DATA;
