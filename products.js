const products = [
  {
    name: "Мясные чипсы (Галерея вкуса)",
    category: "Мясные",
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/1966/00871966/norm/00871966.n_1.png",
    description: "Полезный и вкусный перекус",
    proteins: 55,
    fats: 12,
    carbs: 0,
    calories: 330
  },
  {
    name: "Мясные чипсы JerFood",
    category: "Мясные",
    description: "Ну ооочень вкусные кусочки филе в соусе Терияки",
    image: "https://imgproxy.kuper.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzQwMjY4NDI3L29yaWdpbmFsLzIvMjAyNC0xMS0yNiUyMDE1JTNBMTMlM0E1Ni44MTg0NzklMkIwMCUzQTAwLzQwMjY4NDI3XzIuanBn.jpg",
    proteins: 50,
    fats: 3.5,
    carbs: 2.6,
    calories: 242
  },
  {
    name: "Сыр Легкий 20% (Молочный мир)",
    category: "Сыры",
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/3223/02063223/norm/02063223.n_1.png",
    proteins: 29,
    fats: 9,
    carbs: 0,
    calories: 197
  },
    {
    name: "Сыр Легкий 35% (Брест-Литовск)",
    category: "Сыры",
    image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/1983/00761983/norm/00761983.n_1.png",
    proteins: 31.2,
    fats: 18.2,
    carbs: 0,
    calories: 288.6
  },
  {
name: "Колбаса Никольская (Славянские продукты)",
category: "Мясные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/7327/02117327/norm/02117327.n_2.png",
proteins: 40,
fats: 5,
carbs: 0,
calories: 204
},
{
name: "Колбаса Милано (Петруха)",
category: "Мясные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/7629/00837629/norm/00837629.n_1.png",
proteins: 34,
fats: 10,
carbs: 0,
calories: 230
},
{
name: "Ветчина куриная (Natura)",
category: "Мясные",
image: "https://img.gippo.by/images/4810022026881.jpg",
proteins: 18,
fats: 4,
carbs: 2,
calories: 116
},
{
name: "Говядина Кремлевская",
category: "Мясные",
image: "https://komvak.by/upload/iblock/d86/pv0wi10u1mjy3prve5j0i2pwoqq93n9z.png",
proteins: 32,
fats: 8,
carbs: 0,
calories: 200
},
{
name: "Рулет Филейный (Бретский мясокомбинат)",
category: "Мясные",
image: "https://brestmeat.by/upload/resize_cache/webp/iblock/ae7/aew76vgxo500h3t1pbust3xaud5t9xxa.webp",
proteins: 18,
fats: 3,
carbs: 0,
calories: 100
},
{
name: "Мягкий творог 0,1% (Савушкин)",
category: "Молочные",
image: "https://img.vkusvill.ru/pim/images/site_LargeWebP/4f19b665-ce9a-4348-9fc5-d901338fdf81.webp",
proteins: 10,
fats: 0.1,
carbs: 1,
calories: 44.9
},
{
name: "Exponenta High-Pro",
category: "Молочные",
image: "https://exponenta.by/upload/iblock/b37/b3723738c22e7232b2ad652dc4968768.png",
proteins: 12,
fats: 0,
carbs: 2.5,
calories: 60
},
{
name: "Exponenta Bio-Skyr",
category: "Молочные",
image: "https://bellaktshop.by/images/cache/_thumb_1000x1090xin_upload_iblock_3e8_7s61v2bu974ont0y0rxgqpaa5jknzv7f_kantalypa.png",
proteins: 6,
fats: 0,
carbs: 3,
calories: 36
},
{
name: "Exponenta Кефирная",
category: "Молочные",
image: "https://exponenta.by/upload/iblock/509/509d62eadf35fdc781c9f818af56ee51.png",
proteins: 5,
fats: 0,
carbs: 4.5,
calories: 38
},
{
name: "Топпинги без сахара (Fit Active)",
category: "Вкусняшки",
image: "https://images.deal.by/408635450_w300_h300_topping-mango-marakujya-fit.jpg",
proteins: 2.5,
fats: 0.1,
carbs: 4,
calories: 40
},
{
name: "Заменитель сахара Стевия (таблетки, NOVASWEET)",
category: "Сахзамы",
image: "https://catalog.detmir.st/media/XwjC-a4Lo_zxUvZh570g6HgCrI7sGPz_lYfF2TVrwFE=",
proteins: 0,
fats: 0,
carbs: 0,
calories: 0
},
{
name: "Хлебцы с белым шоколадом (Тонкий стиль)",
category: "Вкусняшки",
image: "https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/63/aa/103ac74e8593f0e49a1caa097069.jpg",
proteins: 5,
fats: 18,
carbs: 63,
calories: 440
},
{
name: "Протеиновые батончики Biovin",
category: "Вкусняшки",
image: "https://www.tablicakalorijnosti.ru/file/image/foodstuff/940d6aaf342947f88511d214075d1e27/ad0cc5b9f5d243818c0f7f5990512c90",
proteins: 32,
fats: 13,
carbs: 14,
calories: 360
},
{
name: "Протеиновые батончики Fitness Shock",
category: "Вкусняшки",
image: "https://enzym.ru/wa-data/public/shop/products/62/43/54362/images/61089/61089.970.png",
proteins: 30,
fats: 12.9,
carbs: 9.6,
calories: 347
},
{
name: "Медальоны из тунца",
category: "Мясные",
image: "https://myikra.by/wp-content/uploads/2019/07/medalony-iz-tuncza.png",
proteins: 23,
fats: 1,
carbs: 0,
calories: 108
},
{
name: "Сосиски Мясные из индейки (Островецкое)",
category: "Мясные",
image: "https://www.tablicakalorijnosti.ru/file/image/foodstuff/2a352a4fab9d4a6095c9fb87098db072/ac2bdc857c114503863dc6f70444e45f",
proteins: 10,
fats: 5,
carbs: 1,
calories: 89
},
{
name: "Сырок глазированный 5% (Молочная страна)",
category: "Вкусняшки",
image: "https://www.belmilk.by/assets/resized/493-493-fit-t/uploads/catalogs/%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0/vanilin-five.png",
proteins: 13.4,
fats: 10,
carbs: 31.6,
calories: 270
},
{
name: "Пельмени Марьино с курицей",
category: "Мясные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/0140/00850140/norm/00850140.n_1.png",
proteins: 12.1,
fats: 3.4,
carbs: 22,
calories: 167
},
{
name: "Пельмени Тимка (Добровский)",
category: "Мясные",
image: "https://cdn.ime.by/UserFiles/images/catalog/Goods/0134/00720134/norm/00720134.n_1.png",
proteins: 13.1,
fats: 5.2,
carbs: 25.1,
calories: 199.6
},
];
