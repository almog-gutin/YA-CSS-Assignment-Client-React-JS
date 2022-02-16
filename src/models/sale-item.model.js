import { v4 as uuidv4 } from 'uuid';

class SaleItem {
    constructor(title, imageURL, rating, price) {
        this.id = uuidv4();
        this.title = title;
        this.imageURL = imageURL;
        this.rating = rating;
        this.price = price;
    }
}

export default SaleItem;
