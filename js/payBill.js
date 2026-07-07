// Pay Bill Handler
document.getElementById('btn-pay-bill').addEventListener('click', function(event) {
    event.preventDefault();
    
    const amount = getInputFieldValueById('bill-amount');
    const pinNumber = document.getElementById('bill-pin').value;
    const biller = document.getElementById('bill-type').value;
    const account = document.getElementById('bill-account').value;
    
    if (isNaN(amount) || amount <= 0) {
        alert('Failed to pay bill. Please enter a valid positive amount.');
        return;
    }
    
    const balance = getTextFieldValueById('account-balance');
    
    if (amount > balance) {
        alert('Failed to pay bill! You do not have sufficient balance.');
        return;
    }
    
    if (pinNumber === '1234') {
        const newBalance = balance - amount;
        
        // Update balance in UI
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        
        // Log transaction
        const transactionList = document.getElementById('transaction-list');
        const div = document.createElement('div');
        div.className = 'bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between';
        div.innerHTML = `
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">OUT</div>
                <div>
                    <h5 class="text-xs font-bold text-slate-800">Pay Bill (${biller})</h5>
                    <p class="text-[9px] text-slate-500">Acc: ${account}</p>
                </div>
            </div>
            <span class="text-xs font-extrabold text-red-500">-৳${amount.toFixed(2)}</span>
        `;
        transactionList.appendChild(div);
        
        // Clear inputs
        document.getElementById('bill-amount').value = '';
        document.getElementById('bill-pin').value = '';
        document.getElementById('bill-account').value = '';
        
        alert(`Successfully paid utility bill of ৳${amount.toFixed(2)} to ${biller}.`);
    } else {
        alert('Failed to pay bill! PIN is incorrect.');
    }
});
