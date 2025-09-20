// 简单的表单提交处理
/* document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('感谢您的留言！我会尽快回复您。');
    this.reset();
});
 */
// 平滑滚动到锚点
function initSmoothScrolling() {
    console.log("初始化平滑滚动...");

    // 获取所有锚点链接
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    console.log(`找到 ${anchorLinks.length} 个锚点链接`);

    // 为每个链接添加点击事件
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            console.log(`点击了链接: ${targetId}`);

            // 处理空链接
            if (targetId === '#') return;

            // 查找目标元素
            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                console.error(`未找到目标元素: ${targetId}`);
                return;
            }

            // 计算滚动位置（考虑固定导航栏的高度）
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            console.log(`滚动到位置: ${targetPosition}px (已考虑导航栏高度: ${headerHeight}px)`);

            // 使用平滑滚动
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // 更新URL哈希（可选）
            history.pushState(null, null, targetId);
        });
    });
}

// 在DOM完全加载后初始化
document.addEventListener('DOMContentLoaded', initSmoothScrolling);

// 添加错误处理
window.addEventListener('error', function (e) {
    console.error('JavaScript错误:', e.error);
});