import {test,expect} from '@playwright/test';
test('分类与五组标签筛选',async({page})=>{
 await page.goto('/');await expect(page.locator('.recipe-card')).toHaveCount(6);
 await page.getByRole('button',{name:'抗炎食谱',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(3);await expect(page.locator('.category-explanation')).toContainText('不代表治疗效果');
 await page.getByRole('button',{name:'经典佳肴',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(2);
 await page.getByRole('button',{name:'全部食谱',exact:true}).click();await page.getByRole('button',{name:'分类标签',exact:false}).click();
 await expect(page.locator('.tag-filter-row')).toHaveCount(5);
 await page.locator('.tag-filter-row').filter({hasText:'饮食需求'}).getByRole('button',{name:'高蛋白',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(2);
 await page.locator('.tag-filter-row').filter({hasText:'食材/菜品'}).getByRole('button',{name:'鸡肉',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(1);
 await page.locator('.tag-filter-row').filter({hasText:'食材/菜品'}).getByRole('button',{name:'鱼类',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(2);
 await page.getByRole('button',{name:'清空标签',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(6);
 await page.locator('.tag-filter-row').filter({hasText:'饮食需求'}).getByRole('button',{name:'无麸质',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(0);await expect(page.getByRole('heading',{name:'暂时没有找到食谱'})).toBeVisible();
});
test('档案优先推荐、冲突后置、隐藏与切换过敏案例',async({page})=>{
 await page.goto('/');await expect(page.locator('.recipe-card').last()).toHaveAttribute('data-recipe-id','salmon');await expect(page.locator('[data-recipe-id=salmon] .card-match')).toContainText('与档案冲突');
 await page.getByLabel('隐藏已知冲突食谱').check();await expect(page.locator('.recipe-card')).toHaveCount(5);await page.getByLabel('隐藏已知冲突食谱').uncheck();
 await page.locator('.profile-trigger').click();await page.locator('.profile-menu').getByRole('button',{name:/小周/}).click();await expect(page.locator('.recipe-card').last()).toHaveAttribute('data-recipe-id','pumpkin');
 await page.locator('[data-recipe-id=pumpkin] .card-image-button').click();await expect(page.locator('.match-result')).toContainText('过敏记录冲突');await expect(page.locator('.pending-info')).toContainText('交叉接触');await page.screenshot({path:'artifacts/recipe-conflict.png',fullPage:true});
 await page.reload();await expect(page.locator('.match-profile')).toContainText('小周');
});
test('上周榜首固定、收藏持久化，排序不篡改周统计',async({page})=>{
 await page.goto('/');await expect(page.locator('.winner-stat')).toContainText('386');
 await page.getByRole('button',{name:'收藏香煎三文鱼藜麦碗',exact:true}).click();await page.reload();await expect(page.getByRole('button',{name:'取消收藏香煎三文鱼藜麦碗',exact:true})).toBeVisible();await expect(page.locator('.winner-stat')).toContainText('386');
 await page.getByRole('combobox',{name:'食谱排序'}).selectOption('上周收藏最多');await expect(page.locator('.recipe-card').first()).toHaveAttribute('data-recipe-id','salmon');
 await page.getByRole('button',{name:/我的收藏/}).click();await expect(page.locator('.recipe-card')).toHaveCount(1);
});
test('详情深链接、多图、正常比例、份量、标签返回和点赞',async({page})=>{
 await page.goto('/#/recipe/salmon');await expect(page.getByRole('heading',{name:'香煎三文鱼藜麦碗'})).toBeVisible();
 await expect(page.locator('.detail-cover .photo-art')).toHaveAttribute('preserveAspectRatio','xMidYMid slice');await expect(page.locator('.detail-cover .photo-art')).toHaveAttribute('viewBox','0 0 512 512');
 await page.getByRole('button',{name:'增加份数'}).click();await expect(page.locator('.ingredients label').first()).toContainText('360 g');await expect(page.locator('.calories strong')).toHaveText('486');
 await page.getByRole('button',{name:'下一张图片'}).click();await expect(page.locator('.photo-count')).toHaveText('2 / 2');await expect(page.locator('.detail-cover image')).toHaveAttribute('href',/recipes-alt.png$/);
 await page.getByRole('button',{name:'喜欢这道食谱'}).click();await expect(page.getByRole('button',{name:'喜欢这道食谱'})).toContainText('129');
 await page.screenshot({path:'artifacts/recipe-detail.png',fullPage:true});
 await page.locator('.grouped-detail-tags').getByRole('button',{name:'高蛋白',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(2);await expect(page.locator('.selected-tag-line')).toContainText('高蛋白');
});
test('搜索、桌面截图与布局无溢出',async({page})=>{
 await page.setViewportSize({width:1440,height:1000});await page.goto('/');await expect(page.locator('.recipe-card')).toHaveCount(6);
 await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.screenshot({path:'artifacts/community-desktop.png',fullPage:true});
 await page.getByRole('textbox',{name:'搜索食谱'}).fill('西兰花');await expect(page.locator('.recipe-card')).toHaveCount(2);await page.getByRole('button',{name:'清除搜索'}).click();await expect(page.locator('.recipe-card')).toHaveCount(6);
 await page.getByRole('button',{name:'分类标签',exact:false}).click();await page.screenshot({path:'artifacts/community-tags.png',fullPage:true});
 await page.setViewportSize({width:1120,height:850});await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
