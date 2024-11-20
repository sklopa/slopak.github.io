
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('name').value;
    document.getElementById('subscription-message').textContent = `Дякуємо за підписку, ${name}! Ви будете отримувати сповіщення.`;
    document.getElementById('subscription-form').reset();
});


function showSection(event, sectionId) {
    event.preventDefault(); // Запобігає переходу за посиланням

    // Сховати всі секції
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none'; // Сховати секцію
    });

    // Показати вибрану секцію
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Показати секцію
    }
}

// Завантажити першу секцію за замовчуванням
document.addEventListener("DOMContentLoaded", function() {
    showSection(event, 'introduction'); // Показати секцію "Чому цей веб-сайт потрібний?"
});

function submitForm(event) {
    event.preventDefault(); // Зупинити стандартну поведінку форми

    const type = document.getElementById('threat-type').value;
    const description = document.getElementById('threat-description').value;
    const location = document.getElementById('location').value;

    // Отримати існуючі загрози з localStorage
    const threats = JSON.parse(localStorage.getItem('threats')) || [];

    // Додати нову загрозу до масиву
    threats.push({ type, description, location });

    // Зберегти оновлений масив у localStorage
    localStorage.setItem('threats', JSON.stringify(threats));

    // Очистити форму після відправлення
    document.getElementById('report-form').reset();

    // Відобразити повідомлення про успішне повідомлення загрози
    const reportMessage = document.getElementById('report-message');
    reportMessage.textContent = `Дякуємо за повідомлення про загрозу! Тип: ${type}, Опис: ${description}, Місцезнаходження: ${location}.`;
    reportMessage.style.color = 'green'; // Змінити колір на зелений для успішного повідомлення

    // Оновити список загроз
    loadThreats();
}