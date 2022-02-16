import { v4 as uuidv4 } from 'uuid';

class WhyMapelItem {
    constructor(title, description, svg) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.svg = svg;
    }
}

export default WhyMapelItem;
