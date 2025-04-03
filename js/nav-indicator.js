// 添加导航栏活动页面指示器
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面URL
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop();
    
    // 移除所有活动类
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // 为当前页面链接添加活动类
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === filename || (filename === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
