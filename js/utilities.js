// Shared helper functions

/**
 * Get the value of an input field as a number
 */
function getInputFieldValueById(id) {
    const inputEl = document.getElementById(id);
    if (!inputEl) return 0;
    const value = inputEl.value;
    const number = parseFloat(value);
    return number;
}

/**
 * Get the text content of an HTML element as a number
 */
function getTextFieldValueById(id) {
    const element = document.getElementById(id);
    if (!element) return 0;
    const text = element.innerText;
    const number = parseFloat(text);
    return number;
}

/**
 * Toggle section visibility by showing one section and hiding others
 */
function showSectionById(id) {
    // Hide all main form sections
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('send-money-section').classList.add('hidden');
    document.getElementById('pay-bill-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    
    // Show the requested section
    document.getElementById(id).classList.remove('hidden');
}
