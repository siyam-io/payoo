// Cash Out Handler
document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    
    const amount = getInputFieldValueById('cashout-amount');
    const pinNumber = document.getElementById('cashout-pin').value;
    const agentNumber = document.getElementById('cashout-agent').value;
    
    if (isNaN(amount) || amount <= 0) {
        alert('Failed to cash out. Please enter a valid positive amount.');
        return;
    }
    
    const balance = getTextFieldValueById('account-balance');
    
    if (amount > balance) {
        alert('Failed to cash out! You do not have sufficient balance.');
        return;
    }
    
    if (pinNumber === '1234') {
        const newBalance = balance - amount;
        
        // Update balance in HTML UI
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        
        // Log transaction
        const transactionList = document.getElementById('transaction-list');
        const div = document.createElement('div');
        div.className = 'bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between';
        div.innerHTML = `
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">OUT</div>
                <div>
                    <h5 class="text-xs font-bold text-slate-800">Cash Out</h5>
                    <p class="text-[9px] text-slate-500">Agent: ${agentNumber}</p>
                </div>
            </div>
            <span class="text-xs font-extrabold text-red-500">-৳${amount.toFixed(2)}</span>
        `;
        transactionList.appendChild(div);
        
        // Clear inputs
        document.getElementById('cashout-amount').value = '';
        document.getElementById('cashout-pin').value = '';
        document.getElementById('cashout-agent').value = '';
        
        alert(`Successfully cashed out ৳${amount.toFixed(2)}.`);
    } else {
        alert('Failed to cash out! PIN is incorrect.');
    }
});
