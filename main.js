document.querySelectorAll('.quantity').forEach(select => {
    select.addEventListener('change', updateTotals);
});

function updateTotals() {
    let totalDue = 0;

    document.querySelectorAll('.quantity').forEach(select => {
        const price = parseInt(select.getAttribute('data-price'));
        const quantity = parseInt(select.value);
        const totalCell = select.closest('tr').querySelector('.total');

        const total = price * quantity;
        totalCell.textContent = total;

        totalDue += total;
    });

    document.getElementById('total-due').textContent = totalDue;
}

document.getElementById('buy-button').addEventListener('click', () => {
    alert('Tickets purchased successfully!');
});