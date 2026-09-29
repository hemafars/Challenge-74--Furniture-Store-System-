function calculateInvoice(customer, product, quantity, installation, price) {
    let total = price * quantity;
    let discount = 0;
    let finalPrice;
    let complet = true;

    if (isNaN(price) || price <= 0) { complet = false; }
    if (isNaN(quantity) || quantity <= 0) { complet = false; }
    
    if (complet) {
        if (installation.toLowerCase() === "yes") { total = total + 500; }
        if (total > 25000) { discount = total * 0.12; }
        finalPrice = total - discount;

        console.log(`Customer : ${customer}`);
        console.log(`Product : ${product}`);
        console.log(`Quantity : ${quantity}`);
        console.log(`Installation : ${installation}`);
        console.log(`Total : ${total}`);
        console.log(`Discount : ${discount}`);
        console.log(`FinalPrice : ${finalPrice}`);
    } else {
        console.log("Error: Invalid Price or Quantity.");
    }
}

// استدعاء الدالة
calculateInvoice("HEMA", "Wardrobe", 1, "yes", 5000);