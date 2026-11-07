import {test,expect} from '@playwright/test';
test('五步发布、多图封面、草稿恢复、营养估算与社区闭环',async({page})=>{
 await page.goto('/');await page.getByRole('button',{name:'发布食谱',exact:true}).click();await expect(page).toHaveURL(/#\/publish$/);
 await page.getByRole('button',{name:'下一步',exact:true}).click();await expect(page.getByRole('alert')).toHaveText('请填写食谱标题。');
 await page.getByLabel('食谱标题').fill('我的番茄豆腐汤');await page.getByLabel('食谱描述').fill('下班后的一碗热汤，分享给认真吃饭的你。');
 await page.getByLabel('上传食谱图片').setInputFiles(['public/images/recipes.png','public/images/recipes-alt.png']);await expect(page.locator('.upload-preview')).toHaveCount(2);
 await page.getByRole('button',{name:'将图片2设为封面'}).click();await expect(page.locator('.upload-preview').first().locator('img')).toHaveAttribute('src',/^data:image\/jpeg/);
 await expect(page.locator('.draft-status')).toContainText('已自动保存');await page.reload();await expect(page.getByLabel('食谱标题')).toHaveValue('我的番茄豆腐汤');await expect(page.locator('.upload-preview')).toHaveCount(2);
 await page.getByRole('button',{name:'下一步',exact:true}).click();await page.getByLabel('食材1名称').fill('番茄');await page.getByLabel('食材1用量').fill('200');
 await page.getByRole('button',{name:'下一步',exact:true}).click();await expect(page.getByRole('alert')).toContainText('逐项确认');await page.getByLabel('食材1匹配').selectOption('tomato');
 await page.getByRole('button',{name:'添加食材',exact:true}).click();await page.getByLabel('食材2名称').fill('豆腐');await page.getByLabel('食材2用量').fill('200');await page.getByLabel('食材2匹配').selectOption('tofu');
 await page.getByRole('button',{name:'下一步',exact:true}).click();await page.getByLabel('步骤1',{exact:true}).fill('将番茄切块，豆腐切小块。');await page.getByRole('button',{name:'添加步骤',exact:true}).click();await page.getByLabel('步骤2',{exact:true}).fill('番茄炒软后加水，放入豆腐，煮熟后享用。');
 await page.getByRole('button',{name:'下一步',exact:true}).click();await page.getByRole('button',{name:'生成模拟营养与标签',exact:true}).click();await expect(page.locator('.analysis-result')).toContainText('可展示模拟估算');
 await expect(page.locator('.nutrition-preview strong').first()).toHaveText('73');await page.getByRole('button',{name:'晚餐',exact:true}).click();await page.screenshot({path:'artifacts/publish-analysis.png',fullPage:true});
 await page.getByRole('button',{name:'预览食谱',exact:true}).click();await expect(page.getByRole('heading',{name:'我的番茄豆腐汤'})).toBeVisible();await page.getByRole('button',{name:'确认发布食谱'}).click();await expect(page.getByRole('alert')).toContainText('请先确认');
 await page.locator('.publish-confirm input').check();await expect.poll(()=>page.locator('.publish-confirm input').evaluate(e=>e.getBoundingClientRect().width)).toBeLessThan(20);await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:'artifacts/publish-preview.png',fullPage:true});await page.getByRole('button',{name:'确认发布食谱'}).click();
 await expect(page).toHaveURL(/#\/recipe\/local-/);await expect(page.getByRole('heading',{name:'我的番茄豆腐汤'})).toBeVisible();await expect(page.locator('.calories strong')).toHaveText('73');await expect(page.locator('.photo-count')).toHaveText('1 / 2');await page.getByRole('button',{name:'下一张图片'}).click();await expect(page.locator('.photo-count')).toHaveText('2 / 2');
 await page.getByRole('button',{name:'收藏食谱',exact:true}).click();await page.reload();await expect(page.getByRole('heading',{name:'我的番茄豆腐汤'})).toBeVisible();await expect(page.getByRole('button',{name:'已收藏',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'返回社区',exact:true}).click();await expect(page.locator('.recipe-card')).toHaveCount(7);await page.getByRole('combobox',{name:'食谱排序'}).selectOption('最新发布');await expect(page.locator('.recipe-card').first()).toContainText('我的番茄豆腐汤');await expect(page.locator('.recipe-card').first()).not.toContainText('NaN');
 await page.getByRole('button',{name:'发布食谱',exact:true}).click();await expect(page.getByLabel('食谱标题')).toHaveValue('');
});
test('未匹配及未换算单位不冒充完整营养，发布后显示待补全',async({page})=>{
 await page.goto('/#/publish');await page.getByLabel('食谱标题').fill('自制酱料小菜');await page.getByLabel('食谱描述').fill('用于展示未知成分的正确处理。');await page.getByLabel('上传食谱图片').setInputFiles('public/images/recipes.png');
 await page.getByRole('button',{name:'下一步',exact:true}).click();await page.getByLabel('食材1名称').fill('自制酱料');await page.getByLabel('食材1单位').selectOption('勺');await page.getByLabel('食材1匹配').selectOption('unknown');await page.getByRole('button',{name:'下一步',exact:true}).click();await page.getByLabel('步骤1',{exact:true}).fill('将酱料拌匀。');await page.getByRole('button',{name:'下一步',exact:true}).click();await page.getByRole('button',{name:'生成模拟营养与标签',exact:true}).click();await expect(page.locator('.nutrition-preview strong').first()).toHaveText('待补全');await expect(page.locator('.missing-nutrition')).toContainText('自制酱料');
 await page.getByRole('button',{name:'预览食谱',exact:true}).click();await page.locator('.publish-confirm input').check();await page.getByRole('button',{name:'确认发布食谱'}).click();await expect(page.locator('.calories strong')).toHaveText('待补全');await expect(page.locator('.macro-list')).not.toContainText('0 g');
});
