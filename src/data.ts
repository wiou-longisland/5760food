export type Ingredient={name:string;amount:number;unit:string};
export type Recipe={id:string;title:string;description:string;author:string;avatar:string;time:number;servings:number;category:string;tags:string[];photo:number;images?:string[];ingredients:Ingredient[];steps:string[];nutrition:number[];likes:number;date:string};
export const categories=['全部食谱','家常快手','清爽轻食','暖心汤羹','元气早餐','抗炎食谱','经典佳肴'];
export const recipes:Recipe[]=[
{id:'salmon',title:'香煎三文鱼藜麦碗',description:'把喜欢的食材装进一个碗里，就是认真吃饭的小小仪式。三文鱼煎到表面微焦，配上松软的藜麦和清爽的蔬菜，最后挤一点柠檬汁。\n工作日也可以慢慢吃一顿有颜色的午餐。',author:'林间小厨',avatar:'林',time:25,servings:2,category:'清爽轻食',tags:['含鱼类','煎制','午餐'],photo:0,ingredients:[{name:'三文鱼',amount:240,unit:'g'},{name:'藜麦（生）',amount:100,unit:'g'},{name:'西兰花',amount:160,unit:'g'},{name:'牛油果',amount:80,unit:'g'},{name:'小番茄',amount:100,unit:'g'},{name:'橄榄油',amount:10,unit:'g'},{name:'盐',amount:2,unit:'g'}],steps:['藜麦洗净，按包装说明加水煮熟，焖约 5 分钟后用叉子拨松。','西兰花切小朵，焯水至熟；小番茄对半切，牛油果切片。','三文鱼擦干，撒上盐。锅中加入橄榄油，中小火将鱼肉两面煎熟，确保中心熟透。','将藜麦和蔬菜装碗，放上三文鱼，按喜好挤少量柠檬汁即可。'],nutrition:[486,32,43,21],likes:128,date:'2026-11-05'},
{id:'broccoli',title:'蒜香西兰花炒口蘑',description:'冰箱里最常见的两样蔬菜，也能做出鲜香的一盘。口蘑先煎出香气，再和西兰花轻轻翻炒，简单调味就很好吃。',author:'一颗小青菜',avatar:'青',time:15,servings:2,category:'家常快手',tags:['植物食材','炒制','新手友好'],photo:1,ingredients:[{name:'西兰花',amount:300,unit:'g'},{name:'口蘑',amount:200,unit:'g'},{name:'蒜',amount:10,unit:'g'},{name:'橄榄油',amount:10,unit:'g'},{name:'盐',amount:2,unit:'g'}],steps:['西兰花洗净切小朵，口蘑切片，蒜切末。','西兰花焯熟后沥干。','热锅加油，将口蘑煎至微黄，加入蒜末炒香。','倒入西兰花翻炒，加盐调味后装盘。'],nutrition:[142,8,13,7],likes:96,date:'2026-11-04'},
{id:'pumpkin',title:'一碗温柔的南瓜燕麦粥',description:'天凉的时候，想把早餐吃得暖一点。南瓜煮软后自带清甜，加上燕麦的香气，不额外加糖也很好喝。',author:'早起的栗子',avatar:'栗',time:20,servings:2,category:'元气早餐',tags:['燕麦','炖煮','早餐'],photo:2,ingredients:[{name:'南瓜',amount:240,unit:'g'},{name:'燕麦片',amount:80,unit:'g'},{name:'牛奶',amount:300,unit:'ml'},{name:'水',amount:200,unit:'ml'}],steps:['南瓜去皮切小块，加入水煮至软烂。','加入燕麦片，小火煮约 5 分钟并搅拌。','倒入牛奶，加热至微沸即可。'],nutrition:[278,11,44,7],likes:73,date:'2026-11-03'},
{id:'chicken',title:'彩蔬鸡胸肉谷物沙拉',description:'不是只有生菜的沙拉。加入温热的谷物和煎好的鸡胸肉，再搭配脆爽蔬菜，口感更丰富，也适合带去办公室。',author:'好好吃饭呀',avatar:'好',time:30,servings:2,category:'清爽轻食',tags:['含鸡肉','午餐','便当灵感'],photo:3,ingredients:[{name:'鸡胸肉',amount:240,unit:'g'},{name:'糙米（生）',amount:100,unit:'g'},{name:'生菜',amount:100,unit:'g'},{name:'小番茄',amount:100,unit:'g'},{name:'橄榄油',amount:12,unit:'g'},{name:'盐',amount:2,unit:'g'}],steps:['糙米按包装说明煮熟。','鸡胸肉用盐腌制片刻，下锅煎至完全熟透后切片。','蔬菜清洗后沥干切好。','将所有食材装盘，淋少许橄榄油拌匀。'],nutrition:[412,34,42,12],likes:112,date:'2026-11-02'},
{id:'tofu',title:'番茄豆腐暖暖汤',description:'番茄炒出红汤，豆腐吸满汤汁。只用几样家常食材，就能给晚餐添上一碗热乎乎的汤。',author:'阿圆的厨房',avatar:'圆',time:20,servings:2,category:'暖心汤羹',tags:['含大豆','炖煮','晚餐'],photo:4,ingredients:[{name:'番茄',amount:300,unit:'g'},{name:'嫩豆腐',amount:250,unit:'g'},{name:'橄榄油',amount:6,unit:'g'},{name:'盐',amount:2,unit:'g'},{name:'水',amount:500,unit:'ml'}],steps:['番茄切块，豆腐切小块。','锅中加油，炒软番茄，轻压出汁。','加入水煮开，放入豆腐。','小火煮约 8 分钟，最后加盐调味。'],nutrition:[156,11,12,8],likes:85,date:'2026-11-01'},
{id:'toast',title:'牛油果鸡蛋开放吐司',description:'给忙碌的早晨留十分钟。烤得微脆的全麦面包，绵密的牛油果，再加一颗鸡蛋，就是很满足的一口。',author:'慢慢早餐',avatar:'慢',time:10,servings:1,category:'元气早餐',tags:['含蛋类','含小麦','新手友好'],photo:5,ingredients:[{name:'全麦面包',amount:60,unit:'g'},{name:'牛油果',amount:60,unit:'g'},{name:'鸡蛋',amount:50,unit:'g'},{name:'橄榄油',amount:3,unit:'g'},{name:'盐',amount:0.5,unit:'g'}],steps:['面包烤至表面微脆。','牛油果去皮压成泥，铺在面包上。','锅中加油，将鸡蛋煎至全熟后放在吐司上，少量盐调味。'],nutrition:[348,14,30,20],likes:104,date:'2026-10-31'}
];

export const tagGroups = {
  '饮食需求':['低糖','低油','低盐','高蛋白','高纤维','素食','无麸质','无乳制品','低碳水'],
  '食材/菜品':['鸡肉','牛肉','鱼类','海鲜','鸡蛋','豆制品','蔬菜','主食','汤类','甜品'],
  '烹饪与时间':['15分钟内','30分钟内','快手菜','一锅料理','烤箱料理','空气炸锅','免烹饪','炒菜','蒸菜','汤料'],
  '场景':['早餐','午餐','晚餐','加餐','减脂餐','工作日','家庭餐','便当','低预算'],
  '口味':['低盐低糖','咸口','甜口','酸甜','不辣','微辣','重辣']
} as const;
export type TagGroup=keyof typeof tagGroups;
export const groupedTags:Record<string,Record<TagGroup,string[]>>={
 salmon:{'饮食需求':['高蛋白','高纤维','无乳制品'],'食材/菜品':['鱼类','蔬菜','主食'],'烹饪与时间':['30分钟内','快手菜'],'场景':['午餐','工作日','便当'],'口味':['咸口','不辣']},
 broccoli:{'饮食需求':['低油','高纤维','素食','无乳制品'],'食材/菜品':['蔬菜'],'烹饪与时间':['15分钟内','30分钟内','快手菜','炒菜'],'场景':['午餐','晚餐','家庭餐','低预算'],'口味':['低盐低糖','咸口','不辣']},
 pumpkin:{'饮食需求':['高纤维'],'食材/菜品':['主食'],'烹饪与时间':['30分钟内','一锅料理'],'场景':['早餐','加餐','家庭餐','低预算'],'口味':['甜口','不辣']},
 chicken:{'饮食需求':['高蛋白','高纤维','无乳制品'],'食材/菜品':['鸡肉','蔬菜','主食'],'烹饪与时间':['30分钟内'],'场景':['午餐','减脂餐','工作日','便当'],'口味':['咸口','不辣']},
 tofu:{'饮食需求':['低油','素食','无乳制品','低碳水'],'食材/菜品':['豆制品','蔬菜','汤类'],'烹饪与时间':['30分钟内','快手菜','一锅料理','汤料'],'场景':['晚餐','家庭餐','低预算'],'口味':['酸甜','不辣']},
 toast:{'饮食需求':['高纤维','无乳制品'],'食材/菜品':['鸡蛋','主食'],'烹饪与时间':['15分钟内','30分钟内','快手菜'],'场景':['早餐','工作日'],'口味':['咸口','不辣']}
};
export const categoryMembership:Record<string,string[]>={salmon:['清爽轻食','抗炎食谱'],broccoli:['家常快手','抗炎食谱'],pumpkin:['元气早餐','抗炎食谱'],chicken:['清爽轻食'],tofu:['暖心汤羹','经典佳肴'],toast:['元气早餐','经典佳肴']};
// Fixed demonstration snapshot, independent of the viewer's current saves.
export const lastWeekCollections:Record<string,number>={salmon:386,broccoli:224,pumpkin:178,chicken:302,tofu:245,toast:193};
export const totalCollections:Record<string,number>={salmon:1258,broccoli:876,pumpkin:642,chicken:1034,tofu:798,toast:921};
export const profiles=[
 {id:'lin',name:'小林',subtitle:'避开鱼类 · 偏好高纤维、低油',exclude:['鱼类'],allergies:[],preferences:['高纤维','低油']},
 {id:'milk',name:'小周',subtitle:'牛奶过敏 · 偏好快手菜',exclude:[],allergies:['奶类'],preferences:['快手菜','15分钟内']},
 {id:'plant',name:'小叶',subtitle:'素食 · 偏好家庭餐',exclude:['鱼类','鸡肉','牛肉','海鲜'],allergies:[],preferences:['素食','家庭餐']},
 {id:'none',name:'访客',subtitle:'暂无档案 · 按热度浏览',exclude:[],allergies:[],preferences:[]}
];
export type Profile=typeof profiles[number];
export function matchRecipe(recipe:Recipe,profile:Profile){
 const ingredients=recipe.ingredients.map(i=>i.name).join(' ');
 const foodGroups=groupedTags[recipe.id]?.['食材/菜品']||[];
 const evidence:Record<string,RegExp>={'鱼类':/鱼/,'鸡肉':/鸡肉|鸡胸|鸡腿/,'牛肉':/牛肉/,'海鲜':/虾|蟹|贝|鱿鱼/,'奶类':/奶|乳/};
 const conflicts=[...profile.exclude,...profile.allergies].filter(x=>foodGroups.includes(x)||!!evidence[x]?.test(ingredients));
 const tags=Object.values(groupedTags[recipe.id]||{}).flat();
 const matched=profile.preferences.filter(t=>tags.includes(t));
 return {conflicts,matched,score:matched.length,hasProfile:profile.id!=='none'};
}
