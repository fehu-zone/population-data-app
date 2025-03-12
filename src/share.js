/**
 * Paylaşma işlevselliğini yöneten fonksiyon.
 * @param {Event} event - Tıklama olayı (click event).
 */
export function handleShare(event) {
  event.preventDefault() // Varsayılan davranışı engelle

  const url = window.location.href // Mevcut sayfanın URL'sini al
  const text = 'Bu harika siteye göz at! ' + url // Paylaşılacak metin

  // WhatsApp bağlantısı oluştur
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`

  // Tarayıcı paylaşım özelliğini kontrol et
  if (navigator.share) {
    // Eğer tarayıcı paylaşımı destekliyorsa
    navigator
      .share({
        title: document.title, // Sayfa başlığını paylaş
        text: text, // Paylaşılacak metin
        url: url, // Sayfa URL'si
      })
      .catch((error) => {
        console.error('Paylaşım başarısız:', error)
        alert('Paylaşım sırasında bir hata oluştu.')
      })
  } else {
    // Eğer tarayıcı paylaşımı desteklemiyorsa WhatsApp bağlantısını aç
    window.open(whatsappUrl, '_blank')
  }
}

/**
 * Paylaşma butonunu başlatır.
 * @param {string} buttonId - Paylaşma butonunun ID'si.
 */
export function initShareButton(buttonId) {
  const shareButton = document.getElementById(buttonId)
  if (shareButton) {
    shareButton.addEventListener('click', handleShare)
  } else {
    console.warn(`Paylaşma butonu bulunamadı: ${buttonId}`)
  }
}
