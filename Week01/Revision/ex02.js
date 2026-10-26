const paymentStatus = "DECLINED";

// Check the payment status and display the appropriate message
if (paymentStatus === "APPROVED") {
    console.log("Pet-care service confirmed");
} 
else if (paymentStatus === "PENDING") {
    console.log("Payment is being processed");
} 
else if (paymentStatus === "DECLINED") {
    console.log("Payment unsuccessful");
}

switch (paymentStatus) {
    case "APPROVED":
        console.log("Pet-care service confirmed");
        break;
    case "PENDING":
        console.log("Payment is being processed");
        break;
    default:
        console.log("Payment unsuccessful");
        break;
}
