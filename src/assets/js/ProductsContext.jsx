import {createContext, useContext, useState} from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const monitors = [
        { id: "monitor1", name: '27" Монитор Samsung Odyssey G5', img: '/src/assets/images/catalog/monitors/monitor1-Photoroom.png', price: '21 320₽', isPremium: false},
        { id: "monitor2", name: '27" Монитор ASUS ProArt PA278CGV', img: '/src/assets/images/catalog/monitors/monitor2-Photoroom.png', price: '46 990₽', isPremium: true},
        { id: "monitor3", name: '27" Монитор Gigabyte GS27FC', img: '/src/assets/images/catalog/monitors/monitor3-Photoroom.png', price: '15 590₽', isPremium: false},
        { id: "monitor4", name: '32" Монитор Samsung Odyssey OLED G8', img: '/src/assets/images/catalog/monitors/monitor4-Photoroom.png', price: '124 990₽', isPremium: true},
        { id: "monitor5", name: '23.8" Монитор Xiaomi Monitor A24i', img: '/src/assets/images/catalog/monitors/monitor5-Photoroom.png', price: '9990₽', isPremium: false},
        { id: 'monitor6', name: '27" Монитор LG UltraGear 27GN800-B', img: '/src/assets/images/catalog/monitors/monitor6-Photoroom.png', price: '27 330₽', isPremium: false },
        { id: 'monitor7', name: '34" Монитор Xiaomi Curved Gaming Monitor G34WQi', img: '/src/assets/images/catalog/monitors/monitor7-Photoroom.png', price: '30 990₽', isPremium: true },
        { id: 'monitor8', name: '23.8" Монитор BLOODY MN240F', img: '/src/assets/images/catalog/monitors/monitor8-Photoroom.png', price: '12 990₽', isPremium: false },
        { id: 'monitor9', name: '27" Монитор BLOODY MN270F', img: '/src/assets/images/catalog/monitors/monitor9-Photoroom.png', price: '14 990₽', isPremium: false },
        { id: 'monitor10', name: '27" Монитор SunWind SUN-M27BA108', img: '/src/assets/images/catalog/monitors/monitor10-Photoroom.png', price: '19 990₽', isPremium: false },
    ];

    const mice = [
        { id: 'mice1', name: 'Мышь проводная A4TECH Bloody V7', img: '/src/assets/images/catalog/mice/mice1.png', price: '2390₽', isPremium: false },
        { id: 'mice2', name: 'Мышь проводная A4TECH Bloody W95 Max Sports', img: '/src/assets/images/catalog/mice/mice2.png', price: '3999₽', isPremium: false },
        { id: 'mice3', name: 'Мышь проводная Logitech G502 Hero', img: '/src/assets/images/catalog/mice/mice3.png', price: '3999₽', isPremium: false },
        { id: 'mice4', name: 'Мышь беспроводная A4TECH Bloody R90 Plus', img: '/src/assets/images/catalog/mice/mice4.png', price: '4199₽', isPremium: true },
        { id: 'mice5', name: 'Мышь беспроводная Oklick 780GW', img: '/src/assets/images/catalog/mice/mice5.png', price: '989₽', isPremium: false },
        { id: 'mice6', name: 'Мышь проводная Logitech G102 LightSync', img: '/src/assets/images/catalog/mice/mice6.png', price: '1949₽', isPremium: false },
        { id: 'mice7', name: 'Мышь проводная A4TECH Bloody W95 Max', img: '/src/assets/images/catalog/mice/mice7.png', price: '3499₽', isPremium: false },
        { id: 'mice8', name: 'Мышь проводная A4TECH X-710BK', img: '/src/assets/images/catalog/mice/mice8.png', price: '1999₽', isPremium: false },
        { id: 'mice9', name: 'Мышь беспроводная A4TECH Bloody R90 Plus Naraka', img: '/src/assets/images/catalog/mice/mice9.png', price: '4199₽', isPremium: true },
        { id: 'mice10', name: 'Мышь беспроводная Logitech G502 X Plus', img: '/src/assets/images/catalog/mice/mice10.png', price: '13 999₽', isPremium: true },
    ];

    const keyboards = [
        { id: 'keyboard1', name: 'Клавиатура Razer Huntsman V2 TKL', img: '/src/assets/images/catalog/keyboards/key1.png', price: '14 490₽', isPremium: true },
        { id: 'keyboard2', name: 'Клавиатура Acer OKW305', img: '/src/assets/images/catalog/keyboards/key2.png', price: '4499₽', isPremium: false },
        { id: 'keyboard3', name: 'Клавиатура MSI VIGOR GK41 DUSK LR RU', img: '/src/assets/images/catalog/keyboards/key3.png', price: '4999₽', isPremium: false },
        { id: 'keyboard4', name: 'Клавиатура A4TECH Bloody S515R', img: '/src/assets/images/catalog/keyboards/key4.png', price: '5490₽', isPremium: false },
        { id: 'keyboard5', name: 'Клавиатура A4TECH Bloody S98 Naraka BLMS Plus', img: '/src/assets/images/catalog/keyboards/key5.png', price: '7999₽', isPremium: true },
        { id: 'keyboard6', name: 'Клавиатура A4TECH Bloody B820R', img: '/src/assets/images/catalog/keyboards/key6.png', price: '8499₽', isPremium: true },
        { id: 'keyboard7', name: 'Клавиатура A4TECH Bloody AT87 Proxy Boom', img: '/src/assets/images/catalog/keyboards/key7.png', price: '7990₽', isPremium: true },
        { id: 'keyboard8', name: 'Клавиатура Acer OKW300', img: '/src/assets/images/catalog/keyboards/key8.png', price: '1349₽', isPremium: false },
        { id: 'keyboard9', name: 'Клавиатура GMNG GG-KB780X', img: '/src/assets/images/catalog/keyboards/key9.png', price: '2906₽', isPremium: false },
        { id: 'keyboard10', name: 'Клавиатура GMNG GG-KB783XPW', img: '/src/assets/images/catalog/keyboards/key10.webp', price: '4872₽', isPremium: false },
    ];

    const chairs = [
        { id: 'chair1', name: 'Кресло игровое ZOMBIE Rudger', img: '/src/assets/images/catalog/chairs/chair1.png', price: '8790₽', isPremium: false },
        { id: 'chair2', name: 'Кресло игровое AROZZI Vernazza Soft Fabric', img: '/src/assets/images/catalog/chairs/chair2.png', price: '41 650₽', isPremium: true },
        { id: 'chair3', name: 'Кресло игровое A4TECH Bloody GC-740', img: '/src/assets/images/catalog/chairs/chair3.png', price: '23 990₽', isPremium: false },
        { id: 'chair4', name: 'Кресло игровое COUGAR Armor S', img: '/src/assets/images/catalog/chairs/chair4.png', price: '32 999₽', isPremium: true },
        { id: 'chair5', name: 'Кресло игровое ZONE 51 Cyberpunk', img: '/src/assets/images/catalog/chairs/chair5.png', price: '31 990₽', isPremium: true },
        { id: 'chair6', name: 'Кресло игровое BRABIX GT Carbon GM-120', img: '/src/assets/images/catalog/chairs/chair6.png', price: '21 930₽', isPremium: false },
        { id: 'chair7', name: 'Кресло игровое EUREKA Norn', img: '/src/assets/images/catalog/chairs/chair7.png', price: '24 990₽', isPremium: false },
        { id: 'chair8', name: 'Кресло игровое ZOMBIE Predator', img: '/src/assets/images/catalog/chairs/chair8.png', price: '13 490₽', isPremium: false },
        { id: 'chair9', name: 'Кресло игровое ZOMBIE Thunder 1', img: '/src/assets/images/catalog/chairs/chair9.png', price: '13 690₽', isPremium: false },
        { id: 'chair10', name: 'Кресло игровое Oklick Cooldown', img: '/src/assets/images/catalog/chairs/chair10.png', price: '10 290₽', isPremium: false },
    ];

    const gamepads = [
        { id: 'gamepad1', name: 'Геймпад беспроводной PlayStation DualSense', img: '/src/assets/images/catalog/gamepads/gamepad1.png', price: '9190₽', isPremium: true },
        { id: 'gamepad2', name: 'Геймпад Thrustmaster Eswap S Pro', img: '/src/assets/images/catalog/gamepads/gamepad2.png', price: '8439₽', isPremium: true },
        { id: 'gamepad3', name: 'Геймпад беспроводной EASYSMX X15', img: '/src/assets/images/catalog/gamepads/gamepad3.png', price: '4899₽', isPremium: true },
        { id: 'gamepad4', name: 'Геймпад беспроводной PlayStation DualSense Edge', img: '/src/assets/images/catalog/gamepads/gamepad4.png', price: '33 290₽', isPremium: true },
        { id: 'gamepad5', name: 'Геймпад проводной Logitech F310', img: '/src/assets/images/catalog/gamepads/gamepad5.png', price: '3399₽', isPremium: false },
        { id: 'gamepad6', name: 'Геймпад беспроводной SPEEDLINK Strike NX', img: '/src/assets/images/catalog/gamepads/gamepad6.png', price: '1959₽', isPremium: false },
        { id: 'gamepad7', name: 'Геймпад беспроводной A4TECH Bloody GPW70 Sports', img: '/src/assets/images/catalog/gamepads/gamepad7.png', price: '5690₽', isPremium: true },
        { id: 'gamepad8', name: 'Геймпад беспроводной Ritmix GP-022WPS', img: '/src/assets/images/catalog/gamepads/gamepad8.png', price: '1250₽', isPremium: false },
        { id: 'gamepad9', name: 'Геймпад беспроводной Sven GC-5050', img: '/src/assets/images/catalog/gamepads/gamepad9.png', price: '2899₽', isPremium: false },
        { id: 'gamepad10', name: 'Геймпад беспроводной EASYSMX X05', img: '/src/assets/images/catalog/gamepads/gamepad10.png', price: '3399₽', isPremium: false },
    ];

    const headphones = [
        { id: 'headphones1', name: 'Гарнитура игровая Razer Blackshark V2 X,', img: '/src/assets/images/catalog/headphones/headphones1.png', price: '5290₽', isPremium: false },
        { id: 'headphones2', name: 'Гарнитура игровая MSI Immerse GH20', img: '/src/assets/images/catalog/headphones/headphones2.png', price: '2579₽', isPremium: false },
        { id: 'headphones3', name: 'Гарнитура игровая Logitech G435', img: '/src/assets/images/catalog/headphones/headphones3.png', price: '7499₽', isPremium: true },
        { id: 'headphones4', name: 'Гарнитура Logitech G432', img: '/src/assets/images/catalog/headphones/headphones4.png', price: '5999₽', isPremium: false },
        { id: 'headphones5', name: 'Гарнитура игровая Edifier G20', img: '/src/assets/images/catalog/headphones/headphones5.png', price: '2390₽', isPremium: false },
        { id: 'headphones6', name: 'Гарнитура игровая HYPERX Cloud Alpha S Blackout', img: '/src/assets/images/catalog/headphones/headphones6.png', price: '12 499₽', isPremium: true },
        { id: 'headphones7', name: 'Гарнитура игровая Acer Nitro OHW306', img: '/src/assets/images/catalog/headphones/headphones7.png', price: '2499₽', isPremium: false },
        { id: 'headphones8', name: 'Гарнитура игровая HYPERX Cloud Stinger 2 Core', img: '/src/assets/images/catalog/headphones/headphones8.png', price: '5499₽', isPremium: false },
        { id: 'headphones9', name: 'Гарнитура игровая Razer Barracuda X', img: '/src/assets/images/catalog/headphones/headphones9.png', price: '10 399₽', isPremium: false },
        { id: 'headphones10', name: 'Гарнитура игровая A4TECH Bloody MC750', img: '/src/assets/images/catalog/headphones/headphones10.png', price: '6599₽', isPremium: true },
    ];

    const [products, setProducts] = useState({
        monitors,
        mice,
        keyboards,
        chairs,
        gamepads,
        headphones
    });

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);