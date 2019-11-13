import { LightningElement, track } from 'lwc';
import LUNCH_BANNER from '@salesforce/resourceUrl/LUNCHBANNER';
import CHEF_ASTRO from '@salesforce/resourceUrl/CHEFASTRO';

export default class LWCA11y extends LightningElement {
    @track radioInputValue = '';
    @track fullUrl

    // Expose Lunch Banner from Static Resource
    lunchBanner = LUNCH_BANNER;

    // Expose Chef Atsro Image from Static Resource
    chefAstro = CHEF_ASTRO;
    
    // Radio button options for the app
    get radioInputOptions() {
        return [
            { label: '11:00', value: 'option1' },
            { label: '11:30', value: 'option2' },
            { label: '12:00', value: 'option3' },
            { label: '12:30', value: 'option4' },
        ];
    }
    
    // Meal options for the app
    get mealOptions() {
        return [
            { label: 'Salad(vegan)', value: 'Salad(vegan)' },
            { label: 'Salad(veggie)', value: 'Salad(veggie)' },
            { label: 'Sandwich(Chicken)', value: 'Sandwich(Chicken)' },
            { label: 'Sandwich(Chicken,Gluten-free)', value: 'Sandwich(Chicken,Gluten-free)' },
            { label: 'Sandwich(Veggie)', value: 'Sandwich(Veggie)' },
            { label: 'Sandwich(Veggie,Gluten-free)', value: 'Sandwich(Veggie,Gluten-free)' }
        ];
    }

    // Drink options for the app
    get drinkOptions() {
        return [
            { label: 'Apple juice', value: 'Apple juice' },
            { label: 'Lemonade', value: 'Lemonade' },
            { label: 'Ice Tea', value: 'Ice Tea' },
            { label: 'Cola', value: 'Cola' },
            { label: 'Diet Cola', value: 'Diet Cola' },
        ];
    }

    // Dessert options for the app
    get dessertOptions() {
        return [
            { label: 'Nothing for me, thanks!', value: 'Nothing for me, thanks!' },
            { label: 'Brownie', value: 'Brownie' },
            { label: 'Cupcake(Red Velvet)', value: 'Cupcake(Red Velvet)' },
            { label: 'Cupcake(Chocolate)', value: 'Cupcake(Chocolate)' },
            { label: 'Cupcake(Vanilla)', value: 'Cupcake(Vanilla)' },
            { label: 'Cookie(Chocolate Chip)', value: 'Cookie(Chocolate Chip)' },
            { label: 'Cookie(Oatmeal Raisin)', value: 'Cookie(Oatmeal Raisin)' },
            { label: 'Cookie(Peanut Butter)', value: 'Cookie(Peanut Butter)' },
            { label: 'Watermelon)', value: 'Watermelon' }
        ];
    }
    
    renderedCallback()
    {
        this.fullUrl='https://a11ydf19.herokuapp.com/';
    }

    handleClick(){
        window.location.replace("https://a11ydf19.herokuapp.com/");
    }
}


