#ifndef __THYBOT_DATA__
#define __THYBOT_DATA__
#include <exception.ice>

module ThybotKioskService {
    module DataService {

     struct Image{
         string id;
         string path;
         int order;
     };

     struct Category{
         string id;
         string name;
         string name_en;
       //  sequence<string> skus; //optional
     };

     struct Brand{
        string id;
        string name;
     };

     struct Facet{
         string name;
         string value;
     };

     struct Prices{
          int market_price;
          int cost_price;
          int unit_price;
          int wholesale_price;
          string currency;
     };

     struct Weight{
         float value;
         string unit;
     };

     struct Dimensions{
         string unit;
         float width;
         float height;
         float depth;
     };

     struct ProductDetail{
         string url;
         string Prices;
     };


     sequence<Image> ImageSequence;
     sequence<Facet>  FacetSequence;
     sequence<Category> CategorySequence;


     //struct Product;

     struct Slot{
         string name;
         int quantity;
         int status;
         string sku_id;
         int x;
         int y;
     };

     sequence<Slot> SlotSequence;
     dictionary<int, SlotSequence> SlotLayout;
     sequence<string>  Tag;
     sequence<Tag> TagSequence;

     struct Product{
         string id;
         string type;
         bool featured;
         CategorySequence categories;
         string state;
         float on_sale_from;
         float on_sale_to;
         string name;
         string lname;
         string title;
         string desc;
         Brand brand;
         ProductDetail detail;
         ImageSequence images;
         Weight weight;
         Dimensions dimensions;
         Tag tags;
         FacetSequence attributes;
         //SkuList skus;
     };

     sequence<Product> ProductSequence;

     struct Sku{
         string id;
         string sku_no;
         string product_id;
         string upc;
         string name;

         Weight weight;
         Dimensions dimensions;
         Prices prices;
         int unit_price;

         ImageSequence images;
         Image  icon; //主图表
         FacetSequence  attributes;
         Product product;
     };

     sequence<Sku> SkuSequence;
     sequence<string> SkuList;

     sequence<string> SlotNameLst;


     struct ShoppingCartItem{
         string sku_id;
         string sku_name;
         int quantity;
         int unit_price;

        /* int fetched;
         float amount_per_item; //price, fee
         float real_paid_amount_per_item;
         float discount_amount_per_item;
         int error;

         SlotNameLst slot_lst;*/
     };

    dictionary<string, ShoppingCartItem> ShoppingCart;


    struct Order{
        string uuidOrder;
    };

    struct OrderDetail{
        string sku_id;
    };

    struct SlotPosition{
         string name;
         int x;
         int y;
         int offsetX;
         int offsetY;
    };

    struct FeeStruct{
        float total;
        float real;
        float discount;

    };

    struct CategoryWithSku{
        Category category;
        SkuSequence skus;
    };

    struct TagWithSku{
        string tag_name;
        SkuSequence skus;
    };


    sequence<CategoryWithSku>  CategoryWithSkuSequence;

    sequence<SlotPosition> SlotPositionSequence;

    sequence<TagWithSku>  TagWithSkuSequence;







       interface DataInterface{

            string getKioskId();
            string getKioskName();

            bool syncRemoteDataBase() throws DataException;   //  售货机从数据库同步数据


            // slot
            bool createSlotByName(string name) throws DataException;      // 创建货道组
            bool saveSlot(Slot s) throws DataException; // no upsert !!!, dangerous !!!   unknown

            Slot getSlotByName(string name) throws DataException;   // 通过货道名获取货道对象
            bool deleteAll() throws DataException;           // 删除所有布局 使用前先使用load 把货架上货物清零
            bool deleteSlotByName(string name) throws DataException;  // 删除一个货道组

            bool setSlotStatus(string name, int status);     // 设置货道是否启用
            bool associateSlotSku(string name, string sku_id);  // 货道和商品绑定
            bool load(string name, int qty, bool isSale);    // 返回最新库存  也用于下架商品
            //bool deliver(string name, int qty);
            bool unloadAll();   // 下架全部商品

            SlotLayout getSlotLayout() throws DataException;   // 获取布局

            SlotSequence getNonemptySlotsBySkuId(string sku_id) throws DataException;   // 通过商品id获取有哪些货道有这个商品 用于购买多个商品
            int getSkuQuantityOnRack(string sku_id) throws DataException;  // 通过商品id获取库存

            //SlotPositionSequence getSlotPositions();
            //bool setSlotPosition(SlotPosition pos);
            //bool getSlotPosition(string slotname);


            bool setRowPosition(string name, int pos);    // 重新设置机械臂的坐标
            //bool getRowPosition(string name);


            // end of slot


            //bool getBadSlots(out SlotSequence slots) throws DataException;
            // product
             //int getSkuQuantityByReferenceNo(string ref) throws DataException;
            //int getSkuById(int id, out Product product,out Sku sku) throws DataException;

            // skus
            SkuSequence getSkus() throws DataException;    // 获取所有备选商品
            SkuSequence getSkusOnRack() throws DataException;   // 获取在架商品
            ProductSequence getProductsOnRack() throws DataException; //fairly used   unknown

            ProductSequence getProducts(string product_type) throws DataException; // 根据商品类型获得这个类型所有商品的数组  for external products

            Sku getSkuById(string uuid) throws DataException, EmptyException;  // 这里的uuid就是sku_id
            Sku getSkuBySkuNo(string ref) throws DataException, EmptyException;  // ref是 sku_no
            Sku getSkuByUpc(string upc) throws DataException, EmptyException;    // upc是条形码


            CategoryWithSkuSequence getCategoryWithSkuOnRack() throws DataException;
            SkuSequence getSkusByCategoryIdOnRack(string uuid) throws DataException;

            TagWithSkuSequence getTagWithSkuOnRack() throws DataException;
            TagSequence getSkusByTagNameOnRack(string tagname) throws DataException;


            Product getProductById(string uuid) throws DataException;//fairly used  根据商品id获取商品对象

            //end of skus

            //SkuSequence getProductSkuList() throws DataException;

            //shoppingcart
            void setCartItemQuantity(string sku_id, int number);
            int  getCartItemQuantity(string sku_id);
            int  totalCartQuantity();
            FeeStruct  totalCartFee();
            int increaseCart(string sku_id);
            int decreaseCart(string sku_id);
            void removeFromCart(string sku_id);
            void clearCart();
            ShoppingCart getCart();
            // end of shopping cart


            void commitSession(string order_no, string content);    // 用于购买动作完成后向后台传递数据


            // debug, info, critical
            void log(string level, string content);


            //sessions
/*            bool newSessionFromCart(ShoppingCart cart);
             getSessionDetail();
            bool saveFetchResult(string session_no, string state, string slot_no, int fetched, int failed, int errno);
            void flushCurrentSession()*/

            // end of session
       };
    };


};

#endif
