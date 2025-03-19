export default async function TabPage({ params }: { params: Promise<{ tabId: string }> }) {
  const resolvedParams = await params; // Чекаємо на params
  const tabId = resolvedParams.tabId; // Отримуємо tabId після await
  const decodedTitle = decodeURIComponent(tabId);

  return (
    <div>
      <h1>Вміст таба: {decodedTitle}</h1>
      <p>Тут буде контент для таба "{decodedTitle}"</p>
    </div>
  );
}
