class Product {
    constructor(title, price, picture, category, information) {
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.category = category;
        this.procedence = procedence;
        this.information = information;
    }

}

class Beer extends Product {
    constructor(title, price, pricePitcher, priceTube, picture, category, information, procedence) {
        super(title, price, picture, category, information); 
        this.pricePitcher = pricePitcher;
        this.priceTube = priceTube;
        this.procedence = procedence;
    }
}