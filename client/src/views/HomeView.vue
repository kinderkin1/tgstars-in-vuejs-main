<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useWebAppNavigation } from 'vue-tg';

  const webAppNavigation = useWebAppNavigation();
  
  // Функция для получения ссылки на счет
  const getInvoiceLink = async () => {
    const response = await fetch('http://localhost:3000/tg/getInvoiceLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    const invoiceLink = await response.json();
    return invoiceLink;
  };

  // Функция для открытия счета
  const openInvoice = async () => {
    const getInvoiceLinkResult = await getInvoiceLink();
    if (getInvoiceLinkResult.success) {
      const invoiceLink = getInvoiceLinkResult.data;
      webAppNavigation.openInvoice(invoiceLink, (url, status) => {
        console.log(`Invoice URL: ${url}, Status: ${status}`);
      });
    }
  };
</script>

<template>
  <main>
    <h1>Hello</h1>
    
    <button class="fixed-button" @click="openInvoice" @touchstart="openInvoice">Pay</button>

  </main>
</template>

<style scoped>
.fixed-button {
  background-color: #007BFF; /* Синий цвет */
  color: white; /* Белый текст */
  border: none; /* Убираем рамку */
  border-radius: 12px; /* Закругленные углы */
  padding: 20px 40px; /* Увеличенные отступы для большего размера */
  font-size: 18px; /* Крупный текст */
  cursor: pointer; /* Указатель при наведении */
  position: fixed; /* Фиксируем кнопку */
  bottom: 20px; /* Отступ снизу */
  left: 50%; /* Центрируем горизонтально */
  transform: translateX(-50%); /* Смещаем, чтобы центрировать */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тень для объёма */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Плавные эффекты */
}

.fixed-button:hover {
  background-color: #0056b3; /* Темно-синий при наведении */
}

.fixed-button:active {
  background-color: #004080; /* Ещё темнее при нажатии */
  transform: translateX(-50%) scale(0.95); /* Эффект нажатия */
}
</style>
