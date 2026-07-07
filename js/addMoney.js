// Add Money Handler
document.getElementById('btn-add-money').addEventListener('click', function(event) {
    event.preventDefault();
    
    const amount = getInputFieldValueById('add-amount');
    const pinNumber = document.getElementById('add-pin').value;
    const account = document.getElementById('add-account').value;
    
    if (isNaN(amount) || amount <= 0) {
        alert('Failed to add money. Please enter a valid positive amount.');
        return;
    }
    
    if (pinNumber === '1234') {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + amount;
        
        // Update current balance in HTML UI
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        
        // Create dynamic transaction record
        const transactionList = document.getElementById('transaction-list');
        const div = document.createElement('div');
        div.className = 'bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between';
        div.innerHTML = `
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">IN</div>
                <div>
                    <h5 class="text-xs font-bold text-slate-800">Add Money</h5>
                    <p class="text-[9px] text-slate-500">Acc: ${account}</p>
                </div>
            </div>
            <span class="text-xs font-extrabold text-green-600">+৳${amount.toFixed(2)}</span>
        `;
        transactionList.appendChild(div);
        
        // Clear input fields
        document.getElementById('add-amount').value = '';
        document.getElementById('add-pin').value = '';
        document.getElementById('add-account').value = '';
        
        alert(`Successfully added ৳${amount.toFixed(2)} to your balance.`);
    } else {
        alert('Failed to add money! Pin is incorrect.');
    }
});
