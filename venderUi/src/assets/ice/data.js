// **********************************************************************
//
// Copyright (c) 2003-2016 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.3
//
// <auto-generated>
//
// Generated from file `data.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var ThybotKioskService = require("exception").ThybotKioskService;
    var Slice = Ice.Slice;

    ThybotKioskService.DataService = __M.module("ThybotKioskService.DataService");

    ThybotKioskService.DataService.Image = Slice.defineStruct(
        function(id, path, order)
        {
            this.id = id !== undefined ? id : "";
            this.path = path !== undefined ? path : "";
            this.order = order !== undefined ? order : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeString(this.path);
            __os.writeInt(this.order);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.path = __is.readString();
            this.order = __is.readInt();
        },
        6, 
        false);

    ThybotKioskService.DataService.Category = Slice.defineStruct(
        function(id, name, name_en)
        {
            this.id = id !== undefined ? id : "";
            this.name = name !== undefined ? name : "";
            this.name_en = name_en !== undefined ? name_en : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeString(this.name);
            __os.writeString(this.name_en);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.name = __is.readString();
            this.name_en = __is.readString();
        },
        3, 
        false);

    ThybotKioskService.DataService.Brand = Slice.defineStruct(
        function(id, name)
        {
            this.id = id !== undefined ? id : "";
            this.name = name !== undefined ? name : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeString(this.name);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.name = __is.readString();
        },
        2, 
        false);

    ThybotKioskService.DataService.Facet = Slice.defineStruct(
        function(name, value)
        {
            this.name = name !== undefined ? name : "";
            this.value = value !== undefined ? value : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.value);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.value = __is.readString();
        },
        2, 
        false);

    ThybotKioskService.DataService.Prices = Slice.defineStruct(
        function(market_price, cost_price, unit_price, wholesale_price, currency)
        {
            this.market_price = market_price !== undefined ? market_price : 0;
            this.cost_price = cost_price !== undefined ? cost_price : 0;
            this.unit_price = unit_price !== undefined ? unit_price : 0;
            this.wholesale_price = wholesale_price !== undefined ? wholesale_price : 0;
            this.currency = currency !== undefined ? currency : "";
        },
        true,
        function(__os)
        {
            __os.writeInt(this.market_price);
            __os.writeInt(this.cost_price);
            __os.writeInt(this.unit_price);
            __os.writeInt(this.wholesale_price);
            __os.writeString(this.currency);
        },
        function(__is)
        {
            this.market_price = __is.readInt();
            this.cost_price = __is.readInt();
            this.unit_price = __is.readInt();
            this.wholesale_price = __is.readInt();
            this.currency = __is.readString();
        },
        17, 
        false);

    ThybotKioskService.DataService.Weight = Slice.defineStruct(
        function(value, unit)
        {
            this.value = value !== undefined ? value : 0.0;
            this.unit = unit !== undefined ? unit : "";
        },
        false,
        function(__os)
        {
            __os.writeFloat(this.value);
            __os.writeString(this.unit);
        },
        function(__is)
        {
            this.value = __is.readFloat();
            this.unit = __is.readString();
        },
        5, 
        false);

    ThybotKioskService.DataService.Dimensions = Slice.defineStruct(
        function(unit, width, height, depth)
        {
            this.unit = unit !== undefined ? unit : "";
            this.width = width !== undefined ? width : 0.0;
            this.height = height !== undefined ? height : 0.0;
            this.depth = depth !== undefined ? depth : 0.0;
        },
        false,
        function(__os)
        {
            __os.writeString(this.unit);
            __os.writeFloat(this.width);
            __os.writeFloat(this.height);
            __os.writeFloat(this.depth);
        },
        function(__is)
        {
            this.unit = __is.readString();
            this.width = __is.readFloat();
            this.height = __is.readFloat();
            this.depth = __is.readFloat();
        },
        13, 
        false);

    ThybotKioskService.DataService.ProductDetail = Slice.defineStruct(
        function(url, Prices)
        {
            this.url = url !== undefined ? url : "";
            this.Prices = Prices !== undefined ? Prices : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.url);
            __os.writeString(this.Prices);
        },
        function(__is)
        {
            this.url = __is.readString();
            this.Prices = __is.readString();
        },
        2, 
        false);
    Slice.defineSequence(ThybotKioskService.DataService, "ImageSequenceHelper", "ThybotKioskService.DataService.Image", false);
    Slice.defineSequence(ThybotKioskService.DataService, "FacetSequenceHelper", "ThybotKioskService.DataService.Facet", false);
    Slice.defineSequence(ThybotKioskService.DataService, "CategorySequenceHelper", "ThybotKioskService.DataService.Category", false);

    ThybotKioskService.DataService.Slot = Slice.defineStruct(
        function(name, quantity, status, sku_id, x, y)
        {
            this.name = name !== undefined ? name : "";
            this.quantity = quantity !== undefined ? quantity : 0;
            this.status = status !== undefined ? status : 0;
            this.sku_id = sku_id !== undefined ? sku_id : "";
            this.x = x !== undefined ? x : 0;
            this.y = y !== undefined ? y : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeInt(this.quantity);
            __os.writeInt(this.status);
            __os.writeString(this.sku_id);
            __os.writeInt(this.x);
            __os.writeInt(this.y);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.quantity = __is.readInt();
            this.status = __is.readInt();
            this.sku_id = __is.readString();
            this.x = __is.readInt();
            this.y = __is.readInt();
        },
        18, 
        false);
    Slice.defineSequence(ThybotKioskService.DataService, "SlotSequenceHelper", "ThybotKioskService.DataService.Slot", false);
    Slice.defineDictionary(ThybotKioskService.DataService, "SlotLayout", "SlotLayoutHelper", "Ice.IntHelper", "ThybotKioskService.DataService.SlotSequenceHelper", false, undefined, undefined, Ice.ArrayUtil.equals);
    Slice.defineSequence(ThybotKioskService.DataService, "TagHelper", "Ice.StringHelper", false);
    Slice.defineSequence(ThybotKioskService.DataService, "TagSequenceHelper", "ThybotKioskService.DataService.TagHelper", false);

    ThybotKioskService.DataService.Product = Slice.defineStruct(
        function(id, type, featured, categories, state, on_sale_from, on_sale_to, name, lname, title, desc, brand, detail, images, weight, dimensions, tags, attributes)
        {
            this.id = id !== undefined ? id : "";
            this.type = type !== undefined ? type : "";
            this.featured = featured !== undefined ? featured : false;
            this.categories = categories !== undefined ? categories : null;
            this.state = state !== undefined ? state : "";
            this.on_sale_from = on_sale_from !== undefined ? on_sale_from : 0.0;
            this.on_sale_to = on_sale_to !== undefined ? on_sale_to : 0.0;
            this.name = name !== undefined ? name : "";
            this.lname = lname !== undefined ? lname : "";
            this.title = title !== undefined ? title : "";
            this.desc = desc !== undefined ? desc : "";
            this.brand = brand !== undefined ? brand : new ThybotKioskService.DataService.Brand();
            this.detail = detail !== undefined ? detail : new ThybotKioskService.DataService.ProductDetail();
            this.images = images !== undefined ? images : null;
            this.weight = weight !== undefined ? weight : new ThybotKioskService.DataService.Weight();
            this.dimensions = dimensions !== undefined ? dimensions : new ThybotKioskService.DataService.Dimensions();
            this.tags = tags !== undefined ? tags : null;
            this.attributes = attributes !== undefined ? attributes : null;
        },
        false,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeString(this.type);
            __os.writeBool(this.featured);
            ThybotKioskService.DataService.CategorySequenceHelper.write(__os, this.categories);
            __os.writeString(this.state);
            __os.writeFloat(this.on_sale_from);
            __os.writeFloat(this.on_sale_to);
            __os.writeString(this.name);
            __os.writeString(this.lname);
            __os.writeString(this.title);
            __os.writeString(this.desc);
            ThybotKioskService.DataService.Brand.write(__os, this.brand);
            ThybotKioskService.DataService.ProductDetail.write(__os, this.detail);
            ThybotKioskService.DataService.ImageSequenceHelper.write(__os, this.images);
            ThybotKioskService.DataService.Weight.write(__os, this.weight);
            ThybotKioskService.DataService.Dimensions.write(__os, this.dimensions);
            ThybotKioskService.DataService.TagHelper.write(__os, this.tags);
            ThybotKioskService.DataService.FacetSequenceHelper.write(__os, this.attributes);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.type = __is.readString();
            this.featured = __is.readBool();
            this.categories = ThybotKioskService.DataService.CategorySequenceHelper.read(__is);
            this.state = __is.readString();
            this.on_sale_from = __is.readFloat();
            this.on_sale_to = __is.readFloat();
            this.name = __is.readString();
            this.lname = __is.readString();
            this.title = __is.readString();
            this.desc = __is.readString();
            this.brand = ThybotKioskService.DataService.Brand.read(__is, this.brand);
            this.detail = ThybotKioskService.DataService.ProductDetail.read(__is, this.detail);
            this.images = ThybotKioskService.DataService.ImageSequenceHelper.read(__is);
            this.weight = ThybotKioskService.DataService.Weight.read(__is, this.weight);
            this.dimensions = ThybotKioskService.DataService.Dimensions.read(__is, this.dimensions);
            this.tags = ThybotKioskService.DataService.TagHelper.read(__is);
            this.attributes = ThybotKioskService.DataService.FacetSequenceHelper.read(__is);
        },
        42, 
        false);
    Slice.defineSequence(ThybotKioskService.DataService, "ProductSequenceHelper", "ThybotKioskService.DataService.Product", false);

    ThybotKioskService.DataService.Sku = Slice.defineStruct(
        function(id, sku_no, product_id, upc, name, weight, dimensions, prices, unit_price, images, icon, attributes, product)
        {
            this.id = id !== undefined ? id : "";
            this.sku_no = sku_no !== undefined ? sku_no : "";
            this.product_id = product_id !== undefined ? product_id : "";
            this.upc = upc !== undefined ? upc : "";
            this.name = name !== undefined ? name : "";
            this.weight = weight !== undefined ? weight : new ThybotKioskService.DataService.Weight();
            this.dimensions = dimensions !== undefined ? dimensions : new ThybotKioskService.DataService.Dimensions();
            this.prices = prices !== undefined ? prices : new ThybotKioskService.DataService.Prices();
            this.unit_price = unit_price !== undefined ? unit_price : 0;
            this.images = images !== undefined ? images : null;
            this.icon = icon !== undefined ? icon : new ThybotKioskService.DataService.Image();
            this.attributes = attributes !== undefined ? attributes : null;
            this.product = product !== undefined ? product : new ThybotKioskService.DataService.Product();
        },
        false,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeString(this.sku_no);
            __os.writeString(this.product_id);
            __os.writeString(this.upc);
            __os.writeString(this.name);
            ThybotKioskService.DataService.Weight.write(__os, this.weight);
            ThybotKioskService.DataService.Dimensions.write(__os, this.dimensions);
            ThybotKioskService.DataService.Prices.write(__os, this.prices);
            __os.writeInt(this.unit_price);
            ThybotKioskService.DataService.ImageSequenceHelper.write(__os, this.images);
            ThybotKioskService.DataService.Image.write(__os, this.icon);
            ThybotKioskService.DataService.FacetSequenceHelper.write(__os, this.attributes);
            ThybotKioskService.DataService.Product.write(__os, this.product);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.sku_no = __is.readString();
            this.product_id = __is.readString();
            this.upc = __is.readString();
            this.name = __is.readString();
            this.weight = ThybotKioskService.DataService.Weight.read(__is, this.weight);
            this.dimensions = ThybotKioskService.DataService.Dimensions.read(__is, this.dimensions);
            this.prices = ThybotKioskService.DataService.Prices.read(__is, this.prices);
            this.unit_price = __is.readInt();
            this.images = ThybotKioskService.DataService.ImageSequenceHelper.read(__is);
            this.icon = ThybotKioskService.DataService.Image.read(__is, this.icon);
            this.attributes = ThybotKioskService.DataService.FacetSequenceHelper.read(__is);
            this.product = ThybotKioskService.DataService.Product.read(__is, this.product);
        },
        94, 
        false);
    Slice.defineSequence(ThybotKioskService.DataService, "SkuSequenceHelper", "ThybotKioskService.DataService.Sku", false);
    Slice.defineSequence(ThybotKioskService.DataService, "SkuListHelper", "Ice.StringHelper", false);
    Slice.defineSequence(ThybotKioskService.DataService, "SlotNameLstHelper", "Ice.StringHelper", false);

    ThybotKioskService.DataService.ShoppingCartItem = Slice.defineStruct(
        function(sku_id, sku_name, quantity, unit_price)
        {
            this.sku_id = sku_id !== undefined ? sku_id : "";
            this.sku_name = sku_name !== undefined ? sku_name : "";
            this.quantity = quantity !== undefined ? quantity : 0;
            this.unit_price = unit_price !== undefined ? unit_price : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.sku_id);
            __os.writeString(this.sku_name);
            __os.writeInt(this.quantity);
            __os.writeInt(this.unit_price);
        },
        function(__is)
        {
            this.sku_id = __is.readString();
            this.sku_name = __is.readString();
            this.quantity = __is.readInt();
            this.unit_price = __is.readInt();
        },
        10, 
        false);
    Slice.defineDictionary(ThybotKioskService.DataService, "ShoppingCart", "ShoppingCartHelper", "Ice.StringHelper", "ThybotKioskService.DataService.ShoppingCartItem", false, undefined, undefined, Ice.HashMap.compareEquals);

    ThybotKioskService.DataService.Order = Slice.defineStruct(
        function(uuidOrder)
        {
            this.uuidOrder = uuidOrder !== undefined ? uuidOrder : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.uuidOrder);
        },
        function(__is)
        {
            this.uuidOrder = __is.readString();
        },
        1, 
        false);

    ThybotKioskService.DataService.OrderDetail = Slice.defineStruct(
        function(sku_id)
        {
            this.sku_id = sku_id !== undefined ? sku_id : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.sku_id);
        },
        function(__is)
        {
            this.sku_id = __is.readString();
        },
        1, 
        false);

    ThybotKioskService.DataService.SlotPosition = Slice.defineStruct(
        function(name, x, y, offsetX, offsetY)
        {
            this.name = name !== undefined ? name : "";
            this.x = x !== undefined ? x : 0;
            this.y = y !== undefined ? y : 0;
            this.offsetX = offsetX !== undefined ? offsetX : 0;
            this.offsetY = offsetY !== undefined ? offsetY : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeInt(this.x);
            __os.writeInt(this.y);
            __os.writeInt(this.offsetX);
            __os.writeInt(this.offsetY);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.x = __is.readInt();
            this.y = __is.readInt();
            this.offsetX = __is.readInt();
            this.offsetY = __is.readInt();
        },
        17, 
        false);

    ThybotKioskService.DataService.FeeStruct = Slice.defineStruct(
        function(total, real, discount)
        {
            this.total = total !== undefined ? total : 0.0;
            this.real = real !== undefined ? real : 0.0;
            this.discount = discount !== undefined ? discount : 0.0;
        },
        false,
        function(__os)
        {
            __os.writeFloat(this.total);
            __os.writeFloat(this.real);
            __os.writeFloat(this.discount);
        },
        function(__is)
        {
            this.total = __is.readFloat();
            this.real = __is.readFloat();
            this.discount = __is.readFloat();
        },
        12, 
        true);

    ThybotKioskService.DataService.CategoryWithSku = Slice.defineStruct(
        function(category, skus)
        {
            this.category = category !== undefined ? category : new ThybotKioskService.DataService.Category();
            this.skus = skus !== undefined ? skus : null;
        },
        false,
        function(__os)
        {
            ThybotKioskService.DataService.Category.write(__os, this.category);
            ThybotKioskService.DataService.SkuSequenceHelper.write(__os, this.skus);
        },
        function(__is)
        {
            this.category = ThybotKioskService.DataService.Category.read(__is, this.category);
            this.skus = ThybotKioskService.DataService.SkuSequenceHelper.read(__is);
        },
        4, 
        false);

    ThybotKioskService.DataService.TagWithSku = Slice.defineStruct(
        function(tag_name, skus)
        {
            this.tag_name = tag_name !== undefined ? tag_name : "";
            this.skus = skus !== undefined ? skus : null;
        },
        false,
        function(__os)
        {
            __os.writeString(this.tag_name);
            ThybotKioskService.DataService.SkuSequenceHelper.write(__os, this.skus);
        },
        function(__is)
        {
            this.tag_name = __is.readString();
            this.skus = ThybotKioskService.DataService.SkuSequenceHelper.read(__is);
        },
        2, 
        false);
    Slice.defineSequence(ThybotKioskService.DataService, "CategoryWithSkuSequenceHelper", "ThybotKioskService.DataService.CategoryWithSku", false);
    Slice.defineSequence(ThybotKioskService.DataService, "SlotPositionSequenceHelper", "ThybotKioskService.DataService.SlotPosition", false);
    Slice.defineSequence(ThybotKioskService.DataService, "TagWithSkuSequenceHelper", "ThybotKioskService.DataService.TagWithSku", false);

    ThybotKioskService.DataService.DataInterface = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::ThybotKioskService::DataService::DataInterface"
        ],
        -1, undefined, undefined, false);

    ThybotKioskService.DataService.DataInterfacePrx = Slice.defineProxy(Ice.ObjectPrx, ThybotKioskService.DataService.DataInterface.ice_staticId, undefined);

    Slice.defineOperations(ThybotKioskService.DataService.DataInterface, ThybotKioskService.DataService.DataInterfacePrx,
    {
        "getKioskId": [, , , , , [7], , , , , ],
        "getKioskName": [, , , , , [7], , , , , ],
        "syncRemoteDataBase": [, , , , , [1], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "createSlotByName": [, , , , , [1], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "saveSlot": [, , , , , [1], [[ThybotKioskService.DataService.Slot]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getSlotByName": [, , , , , [ThybotKioskService.DataService.Slot], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "deleteAll": [, , , , , [1], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "deleteSlotByName": [, , , , , [1], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "setSlotStatus": [, , , , , [1], [[7], [3]], , , , ],
        "associateSlotSku": [, , , , , [1], [[7], [7]], , , , ],
        "load": [, , , , , [1], [[7], [3], [1]], , , , ],
        "unloadAll": [, , , , , [1], , , , , ],
        "getSlotLayout": [, , , , , ["ThybotKioskService.DataService.SlotLayoutHelper"], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getNonemptySlotsBySkuId": [, , , , , ["ThybotKioskService.DataService.SlotSequenceHelper"], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getSkuQuantityOnRack": [, , , , , [3], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "setRowPosition": [, , , , , [1], [[7], [3]], , , , ],
        "getSkus": [, , , , , ["ThybotKioskService.DataService.SkuSequenceHelper"], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getSkusOnRack": [, , , , , ["ThybotKioskService.DataService.SkuSequenceHelper"], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getProductsOnRack": [, , , , , ["ThybotKioskService.DataService.ProductSequenceHelper"], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getProducts": [, , , , , ["ThybotKioskService.DataService.ProductSequenceHelper"], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getSkuById": [, , , , , [ThybotKioskService.DataService.Sku], [[7]], , 
        [
            ThybotKioskService.DataException,
            ThybotKioskService.EmptyException
        ], , ],
        "getSkuBySkuNo": [, , , , , [ThybotKioskService.DataService.Sku], [[7]], , 
        [
            ThybotKioskService.DataException,
            ThybotKioskService.EmptyException
        ], , ],
        "getSkuByUpc": [, , , , , [ThybotKioskService.DataService.Sku], [[7]], , 
        [
            ThybotKioskService.DataException,
            ThybotKioskService.EmptyException
        ], , ],
        "getCategoryWithSkuOnRack": [, , , , , ["ThybotKioskService.DataService.CategoryWithSkuSequenceHelper"], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getSkusByCategoryIdOnRack": [, , , , , ["ThybotKioskService.DataService.SkuSequenceHelper"], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getTagWithSkuOnRack": [, , , , , ["ThybotKioskService.DataService.TagWithSkuSequenceHelper"], , , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getSkusByTagNameOnRack": [, , , , , ["ThybotKioskService.DataService.TagSequenceHelper"], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "getProductById": [, , , , , [ThybotKioskService.DataService.Product], [[7]], , 
        [
            ThybotKioskService.DataException
        ], , ],
        "setCartItemQuantity": [, , , , , , [[7], [3]], , , , ],
        "getCartItemQuantity": [, , , , , [3], [[7]], , , , ],
        "totalCartQuantity": [, , , , , [3], , , , , ],
        "totalCartFee": [, , , , , [ThybotKioskService.DataService.FeeStruct], , , , , ],
        "increaseCart": [, , , , , [3], [[7]], , , , ],
        "decreaseCart": [, , , , , [3], [[7]], , , , ],
        "removeFromCart": [, , , , , , [[7]], , , , ],
        "clearCart": [, , , , , , , , , , ],
        "getCart": [, , , , , ["ThybotKioskService.DataService.ShoppingCartHelper"], , , , , ],
        "commitSession": [, , , , , , [[7], [7]], , , , ],
        "log": [, , , , , , [[7], [7]], , , , ]
    });
    exports.ThybotKioskService = ThybotKioskService;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
