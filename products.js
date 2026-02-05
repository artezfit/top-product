const products = [
  {
    name: "Мясные чипсы (Галерея вкуса)",
    category: "Мясные",
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/1966/00871966/norm/00871966.n_1.png",
    description: "Полезный и вкусный перекус. Найти можно почти в любом продуктовом",
    proteins: 55,
    fats: 12,
    carbs: 0,
    calories: 330
  },
  {
    name: "Мясные чипсы JerFood",
    category: "Мясные",
    image: "https://imgproxy.kuper.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzQwMjY4NDI3L29yaWdpbmFsLzIvMjAyNC0xMS0yNiUyMDE1JTNBMTMlM0E1Ni44MTg0NzklMkIwMCUzQTAwLzQwMjY4NDI3XzIuanBn.jpg",
    description: "Ну ооочень вкусные кусочки филе в соусе Терияки. Находил в Грине",
    proteins: 50,
    fats: 3.5,
    carbs: 2.6,
    calories: 242
  },
  {
    name: "Колбаса Никольская (Славянские продукты)",
    category: "Мясные",
    image: "images/nikol.png",
    description: "Очень классная колбаса, вот правда найти ее сложновато. Находил в Соседях и Гиппо",
    proteins: 40,
    fats: 5,
    carbs: 0,
    calories: 204
    },
    {
      name: "Колбаса Милано (Петруха)",
      category: "Мясные",
      image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/7629/00837629/norm/00837629.n_1.png",
      description: "Найти можно почти в любом продуктовом",
      proteins: 34,
      fats: 10,
      carbs: 0,
      calories: 230
      },
  {
name: "Ветчина куриная (Natura)",
category: "Мясные",
image: "https://img.gippo.by/images/4810022026881.jpg",
description: "Альтернатива куриному филе. Находил в Гиппо, Белмаркете, Грине",
proteins: 18,
fats: 4,
carbs: 2,
calories: 116
},
{
  name: "Рулет Филейный (Бретский мясокомбинат)",
  category: "Мясные",
  image: "https://brestmeat.by/upload/resize_cache/webp/iblock/ae7/aew76vgxo500h3t1pbust3xaud5t9xxa.webp",
  description: "Альтернатива куриному филе. Находил только в Короне. Скорее всего еще можно найти в фирменном магазине Брестского мясокомбината",
  proteins: 18,
  fats: 3,
  carbs: 0,
  calories: 100
  },
{
  name: "Куриные наггетсы в панировке (Дзержинка)",
  category: "Мясные",
  image: "https://akd.by/wp-content/uploads/2023/12/naggetsy-1.png",
  description: "Куриное филе во вкуснейшей панировке (почти как в KFC). Находил в грине и фирменном магазине Дзержинка",
  proteins: 12,
  fats: 2,
  carbs: 8,
  calories: 130
  },
{
  name: "Наггетсы из индейки в панировке (Дзержинка)",
  category: "Мясные",
  image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/1799/02041799/norm/02041799.n_1.png",
  description: "Очень вкусное филе индейки во вкуснейшей панировке (почти как в KFC). Находил в грине и фирменном магазине Дзержинка",
  proteins: 19,
  fats: 2,
  carbs: 7.5,
  calories: 120
  },
{
  name: "Руляда с черносливом и орехами (Дзержинка)",
  category: "Мясные",
  image: "https://akd.by/wp-content/uploads/2024/04/rulyada-s-chernoslivom-i-orehami.png",
  description: "Очень вкусное мясо. Находил в фирменном магазине Дзержинка",
  proteins: 19,
  fats: 4,
  carbs: 1,
  calories: 120
  },
{
name: "Грудка Аппетитная (Ганна)",
category: "Мясные",
image: "https://img.unistore.by/UserFiles/images/catalog/Goods/5933/00025933/norm/thumbs/00025933.n_1_450x450@2x.png",
description: "Альтернатива куриному филе, но копченым лучше часто не злоупотреблять. Найти можно почти в любом продуктовом (эту или схожую по кбжу, но от другого производителя)",
proteins: 21,
fats: 4,
carbs: 0,
calories: 120
},
{
name: "Деликатес от бабушки (Ганна)",
category: "Мясные",
image: "деликатес.jpg",
description: "Вкусное мясо, мне нравится. Если не любите приправы, то попробуйте карпаччо из моего списка. Находил в грине и короне",
proteins: 29,
fats: 2,
carbs: 0,
calories: 130
},
{
name: "Карпаччо (Дзержинский мясокомбинат)",
category: "Мясные",
image: "https://akd.by/wp-content/uploads/2023/09/karpachcho-1.png",
description: "Многим моим подопечным заходит, но лично мне не очень нравится. Найти можно почти в любом продуктовом (эту или схожую по кбжу, но от другого производителя)",
proteins: 29,
fats: 2,
carbs: 0,
calories: 130
},
{
  name: "Говядина Кремлевская (Гродненский мясокомбинат)",
  category: "Мясные",
  image: "https://komvak.by/upload/iblock/d86/pv0wi10u1mjy3prve5j0i2pwoqq93n9z.png",
  description: "Ну оочень вкусная говяжья бастурма. Найти сложновато: видел в Грине иногда, но лично я покупаю в фирменном магазине Гродненского мясокомбината",
  proteins: 32,
  fats: 8,
  carbs: 0,
  calories: 200
  },
  {
name: "Сосиски Мясные из индейки (Островецкое)",
category: "Мясные",
image: "https://io.activecloud.com/static-green-market/1400x1400-1493103-1705961029470.jpg?id=88821&version=1",
description: "Найти можно в Грине, Гиппо и фирменном магазине Индюшонок",
proteins: 10,
fats: 5,
carbs: 1,
calories: 89
},
{
name: "Пельмени Марьино с курицей",
category: "Мясные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/0140/00850140/norm/00850140.n_1.png",
description: "Одни из лучших пельменей на рынке. Найти можно в Соседях, Гиппо, Белмаркете, Грине, Короне",
proteins: 12.1,
fats: 3.4,
carbs: 22,
calories: 167
},
{
name: "Пельмени Тимка (Добровский)",
category: "Мясные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/0134/00720134/norm/00720134.n_1.png",
description: "Очень вкусные пельмени. Найти можно (но не всегда) в Гиппо, Белмаркете, Грине, Короне",
proteins: 13.1,
fats: 5.2,
carbs: 25.1,
calories: 200
},
{
name: "Мясной паштет (Галерея вкуса)",
category: "Мясные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/0103/02180103/norm/02180103.n_1.png",
description: "Мне не зашел даже в качестве намазки на тосты, но многим прям нравится. Попробовать стоит",
proteins: 20,
fats: 10,
carbs: 2,
calories: 172
},
  {
name: "Медальоны из тунца",
category: "Мясные",
image: "https://myikra.by/wp-content/uploads/2019/07/medalony-iz-tuncza.png",
description: "Если захотелось рыбу, то это прям топ. Найти можно почти в любом продуктовом",
proteins: 23,
fats: 1,
carbs: 0,
calories: 108
},
  {
    name: "Сыр Легкий 20% (Молочный мир)",
    category: "Сыры",
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/3223/02063223/norm/02063223.n_1.png",
    description: "Очень классный сыр. Я его натираю на терке и храню уже в таком виде в холодильнике. Найти можно в Евроопте, Хите, Копеечке, Гиппо, Белмаркете",
    proteins: 29,
    fats: 9,
    carbs: 0,
    calories: 197
  },
  {
    name: "Сыр Легкий 35% (Брест-Литовск)",
    category: "Сыры",
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/1983/00761983/norm/00761983.n_1.png",
    description: "Если нет 20% от Молочного мира, то берем этот, тоже топ за свои деньги. Найти можно почти в любом продуктовом",
    proteins: 31.2,
    fats: 18.2,
    carbs: 0,
    calories: 289
  },
{
name: "Мягкий творог 5% Cream Nuvo",
category: "Молочные",
image: "https://dixy.ru/upload/iblock/c71/u47lsc44ip22abt5gd0nrgo2x911spom.webp",
description: "Очень вкусный мягкий творог, который некоторым зайдет даже без ничего. Но если к нему добавить топпинг без калорий или сахзам, то получим вкусный, высокобелковый и низкоуглеводный творожок",
proteins: 15,
fats: 5,
carbs: 1.5,
calories: 111
},
{
name: "Мягкий творог 0,1% (Савушкин)",
category: "Молочные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/6433/01796433/norm/01796433.n_1.png",
description: "Добавляем к нему топпинг без калорий или сахзам и получаем высокобелковый и низкоуглеводный творожок",
proteins: 10,
fats: 0.1,
carbs: 1,
calories: 45
},
{
name: "Сырок протеиновый (Молочный мир)",
category: "Вкусняшки",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/5814/02165814/norm/02165814.n_1.png",
description: "Мне прям зашел. Да, нет глазури, но довольно вкусный и недорогой в пересчете на 1 грамм белка",
proteins: 20,
fats: 5,
carbs: 6.8,
calories: 151
},
{
name: "Сырок глазированный 5% (Молочная страна)",
category: "Вкусняшки",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/7204/02177204/norm/02177204.n_1.png",
description: "Если любите сырки, то попробуйте эти и сможете съедать их на 1 больше, чем любые другие (за счет меньшего количества жира). Найти можно почти в любом продуктовом",
proteins: 12.8,
fats: 12.7,
carbs: 33.2,
calories: 300
},
{
name: "Exponenta High-Pro (напиток)",
category: "Молочные",
image: "https://exponenta.by/upload/iblock/b37/b3723738c22e7232b2ad652dc4968768.png",
description: "Отличный способ добирать белок. Есть вариант без лактозы, но вкус клубника-арбуз мне не зашел. Я предпочитаю чернику-землянику. Найти можно почти в любом продуктовом",
proteins: 12,
fats: 0,
carbs: 2.5,
calories: 60
},
{
name: "Exponenta High-Pro (творожок)",
category: "Молочные",
image: "https://exponenta.by/upload/iblock/9b8/9b8b4207dd54ae50b188c21bdf037e04.png",
description: "Отличный способ добирать белок. Раньше есть было невозможно – был ужасный на вкус, но они поменяли рецептуру и сейчас это топовый неприторный йогурт",
proteins: 12.5,
fats: 0,
carbs: 3,
calories: 62
},
{
name: "Exponenta Bio-Skyr",
category: "Молочные",
image: "https://bellaktshop.by/images/cache/_thumb_1000x1090xin_upload_iblock_3e8_7s61v2bu974ont0y0rxgqpaa5jknzv7f_kantalypa.png",
description: "Вкуснее, чем High-Pro. Больше объема, поэтому, если вы на дефиците калорий, то лучше брать ее. Найти можно почти в любом продуктовом",
proteins: 6,
fats: 0,
carbs: 3,
calories: 36
},
{
name: "Exponenta Кефирная",
category: "Молочные",
image: "https://exponenta.by/upload/iblock/509/509d62eadf35fdc781c9f818af56ee51.png",
description: "Достойная альтернатива классическому кефиру. Найти можно почти в любом продуктовом",
proteins: 5,
fats: 0,
carbs: 4.5,
calories: 38
},
{
name: "Йогурт греческий 2% (Eco Greco)",
category: "Молочные",
image: "https://babushkina.by/wp-content/uploads/2025/04/22.jpg",
description: "Очень вкусный йогурт, который можно использовать в качестве запраки вместо майонеза или сметаны",
proteins: 8.5,
fats: 2,
carbs: 3.3,
calories: 65
},
{
name: "Йогурт греческий 2% (Teos)",
category: "Молочные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/4049/00654049/norm/00654049.n_1.png",
description: "Это просто находка для любителей майонеза – просто заменяете его на этот йогурт. Найти можно почти в любом продуктовом",
proteins: 7,
fats: 2,
carbs: 4.2,
calories: 63
},
{
name: "Топпинги без сахара (Fit Active)",
category: "Вкусняшки",
image: "https://images.deal.by/408635450_w300_h300_topping-mango-marakujya-fit.jpg",
description: "Мастхэф для худеющих сладкоежек. Найти можно на вб/озоне",
proteins: 2.5,
fats: 0.1,
carbs: 4,
calories: 40
},
{
name: "Заменитель сахара Стевия (таблетки, NOVASWEET)",
category: "Сахзамы",
image: "images/stevia.webp",
description: "Добавляем туда, куда вы обычно добавляете сахар. Я покупаю на вб/озоне",
proteins: 0,
fats: 0,
carbs: 0,
calories: 0
},
{
name: "Заменитель сахара Стевия (жидкий, NOVASWEET)",
category: "Сахзамы",
image: "https://basket-16.wbbasket.ru/vol2553/part255354/255354856/images/big/1.webp",
description: "Добавляем туда, куда вы обычно добавляете сахар, например, в выпечку. Я покупаю на вб/озоне",
proteins: 0,
fats: 0,
carbs: 0,
calories: 0
},
{
name: "Хлебцы с белым шоколадом (Тонкий стиль)",
category: "Вкусняшки",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/3198/01553198/norm/01553198.n_1.png",
description: "Мало весят, поэтому калорий получается мало. Достаточно съесть пару штучек, чтобы закрыть потребность в сладком",
proteins: 5,
fats: 18,
carbs: 63,
calories: 440
},
{
name: "Протеиновые батончики Fitness Shock",
category: "Вкусняшки",
image: "https://vplaboutlet.by/upload/resize_cache/iblock/b79/1000_1000_1d345700f21c7b7b03bfe1e8f09e7c75b/ty8pjsov9inbr8u6h5bheax70kixrhz5.webp",
description: "Довольно вкусные и относительно недорогие. Найти можно на вб/озоне",
proteins: 30,
fats: 12.9,
carbs: 9.6,
calories: 347
},
{
name: "Кокосовый батончик Fitness Shock",
category: "Вкусняшки",
image: "https://cdn.lentochka.lenta.com/resample/webp/900x900/photo/629073/catalog-image/ebcfe5bc-c380-421b-9a28-dd0d6a572719.png",
description: "Вкусный, но не белковый, на вкус 100% как баунти. Найти можно на вб/озоне",
proteins: 3,
fats: 15,
carbs: 3.5,
calories: 200
},
{
name: "Хлеб белковый Славянка",
category: "Хлебобулочные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/3839/01313839/norm/01313839.n_1.png",
description: "Вкус на любителя, но если белок прям не получается добирать другими продуктами, а хлебушек любите, то попробовать можно. Найти можно в Гиппо, Белмаркете, Грине, Короне",
proteins: 18,
fats: 2.5,
carbs: 39,
calories: 250
},
{
name: "Хлеб белковый отрубной",
category: "Хлебобулочные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/1151/01531151/norm/01531151.n_1.png",
description: "Неплохой белковый хлебушек. Найти можно почти в любом продуктовом",
proteins: 15.6,
fats: 1.3,
carbs: 30.4,
calories: 196
},
{
name: "Хлеб Фитнес плюс ржаной",
category: "Хлебобулочные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/6950/01176950/norm/01176950.n_1.png",
description: "Довольно вкусный хлебушек. Найти можно почти в любом продуктовом",
proteins: 6.5,
fats: 1.6,
carbs: 45.7,
calories: 225
},
];
