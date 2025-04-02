const printer = require('printer');
const { GlobalKeyboardListener } = require("node-global-key-listener");

const printerName = "POS-58"; // Change this to your printer name

const printReceipt = () => {
    const text = `
Some numbers that could have been are as follows:
78
22
64a

==================
    WELCAME
       12
==================
Please do not address the admin until being told so.

Instructions:
Give someone a hug
`;
    printer.printDirect({
        data: text,
        printer: printerName,
        type: "RAW",
        success: function (jobID) {
            console.log(`Printing job: ${jobID}`);
        },
        error: function (err) {
            console.error("Print failed", err);
        }
    });
};

// Listen for key presses
const keyboard = new GlobalKeyboardListener();

keyboard.addListener((event) => {
    if (event.state === "DOWN" && event.name === "P") { // Press "P" to print
        printReceipt();
    }
});

console.log("Press 'P' to print a receipt.");
