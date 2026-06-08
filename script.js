// 取得按鈕元素
const actionBtn = document.getElementById('actionBtn');

// 監聽點擊事件
actionBtn.addEventListener('click', () => {
  // 點擊特效：縮放一下
  actionBtn.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    actionBtn.style.transform = 'scale(1)';
    
    // 這裡換成妳想引導大家看的網址（例如：妳的 IG Reels 影片網址）
    const targetUrl = "https://www.instagram.com/ninabigeater/"; 
    
    // 開啟新分頁跳轉
    window.open(targetUrl, '_blank');
  }, 150);
});