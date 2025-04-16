import {createContext, useContext, useState} from "react";

//monitors
import monitor1 from '../images/catalog/monitors/monitor1-Photoroom.png';
import monitor2 from '../images/catalog/monitors/monitor2-Photoroom.png';
import monitor3 from '../images/catalog/monitors/monitor3-Photoroom.png';
import monitor4 from '../images/catalog/monitors/monitor4-Photoroom.png';
import monitor5 from '../images/catalog/monitors/monitor5-Photoroom.png';
import monitor6 from '../images/catalog/monitors/monitor6-Photoroom.png';
import monitor7 from '../images/catalog/monitors/monitor7-Photoroom.png';
import monitor8 from '../images/catalog/monitors/monitor8-Photoroom.png';
import monitor9 from '../images/catalog/monitors/monitor9-Photoroom.png';
import monitor10 from '../images/catalog/monitors/monitor10-Photoroom.png';

//mice
import mice1 from '../images/catalog/mice/mice1.png';
import mice2 from '../images/catalog/mice/mice2.png';
import mice3 from '../images/catalog/mice/mice3.png';
import mice4 from '../images/catalog/mice/mice4.png';
import mice5 from '../images/catalog/mice/mice5.png';
import mice6 from '../images/catalog/mice/mice6.png';
import mice7 from '../images/catalog/mice/mice7.png';
import mice8 from '../images/catalog/mice/mice8.png';
import mice9 from '../images/catalog/mice/mice9.png';
import mice10 from '../images/catalog/mice/mice10.png';

//keyboards
import keyboard1 from '../images/catalog/keyboards/key1.png';
import keyboard2 from '../images/catalog/keyboards/key2.png';
import keyboard3 from '../images/catalog/keyboards/key3.png';
import keyboard4 from '../images/catalog/keyboards/key4.png';
import keyboard5 from '../images/catalog/keyboards/key5.png';
import keyboard6 from '../images/catalog/keyboards/key6.png';
import keyboard7 from '../images/catalog/keyboards/key7.png';
import keyboard8 from '../images/catalog/keyboards/key8.png';
import keyboard9 from '../images/catalog/keyboards/key9.png';
import keyboard10 from '../images/catalog/keyboards/key10.webp';

//chairs
import chair1 from '../images/catalog/chairs/chair1.png';
import chair2 from '../images/catalog/chairs/chair2.png';
import chair3 from '../images/catalog/chairs/chair3.png';
import chair4 from '../images/catalog/chairs/chair4.png';
import chair5 from '../images/catalog/chairs/chair5.png';
import chair6 from '../images/catalog/chairs/chair6.png';
import chair7 from '../images/catalog/chairs/chair7.png';
import chair8 from '../images/catalog/chairs/chair8.png';
import chair9 from '../images/catalog/chairs/chair9.png';
import chair10 from '../images/catalog/chairs/chair10.png';

//gamepads
import gamepad1 from '../images/catalog/gamepads/gamepad1.png';
import gamepad2 from '../images/catalog/gamepads/gamepad2.png';
import gamepad3 from '../images/catalog/gamepads/gamepad3.png';
import gamepad4 from '../images/catalog/gamepads/gamepad4.png';
import gamepad5 from '../images/catalog/gamepads/gamepad5.png';
import gamepad6 from '../images/catalog/gamepads/gamepad6.png';
import gamepad7 from '../images/catalog/gamepads/gamepad7.png';
import gamepad8 from '../images/catalog/gamepads/gamepad8.png';
import gamepad9 from '../images/catalog/gamepads/gamepad9.png';
import gamepad10 from '../images/catalog/gamepads/gamepad10.png';

//headphones
import headphones1 from '../images/catalog/headphones/headphones1.png';
import headphones2 from '../images/catalog/headphones/headphones2.png';
import headphones3 from '../images/catalog/headphones/headphones3.png';
import headphones4 from '../images/catalog/headphones/headphones4.png';
import headphones5 from '../images/catalog/headphones/headphones5.png';
import headphones6 from '../images/catalog/headphones/headphones6.png';
import headphones7 from '../images/catalog/headphones/headphones7.png';
import headphones8 from '../images/catalog/headphones/headphones8.png';
import headphones9 from '../images/catalog/headphones/headphones9.png';
import headphones10 from '../images/catalog/headphones/headphones10.png';

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const monitors = [
        { id: "monitor1", name: '27" Монитор Samsung Odyssey G5', img: monitor1, price: '21 320₽', isPremium: false},
        { id: "monitor2", name: '27" Монитор ASUS ProArt PA278CGV', img: monitor2, price: '46 990₽', isPremium: true},
        { id: "monitor3", name: '27" Монитор Gigabyte GS27FC', img: monitor3, price: '15 590₽', isPremium: false},
        { id: "monitor4", name: '32" Монитор Samsung Odyssey OLED G8', img: monitor4, price: '124 990₽', isPremium: true},
        { id: "monitor5", name: '23.8" Монитор Xiaomi Monitor A24i', img: monitor5, price: '9990₽', isPremium: false},
        { id: 'monitor6', name: '27" Монитор LG UltraGear 27GN800-B', img: monitor6, price: '27 330₽', isPremium: false },
        { id: 'monitor7', name: '34" Монитор Xiaomi Curved Gaming Monitor G34WQi', img: monitor7, price: '30 990₽', isPremium: true },
        { id: 'monitor8', name: '23.8" Монитор BLOODY MN240F', img: monitor8, price: '12 990₽', isPremium: false },
        { id: 'monitor9', name: '27" Монитор BLOODY MN270F', img: monitor9, price: '14 990₽', isPremium: false },
        { id: 'monitor10', name: '27" Монитор SunWind SUN-M27BA108', img: monitor10, price: '19 990₽', isPremium: false },
    ];

    const mice = [
        { id: 'mice1', name: 'Мышь проводная A4TECH Bloody V7', img: mice1, price: '2390₽', isPremium: false },
        { id: 'mice2', name: 'Мышь проводная A4TECH Bloody W95 Max Sports', img: mice2, price: '3999₽', isPremium: false },
        { id: 'mice3', name: 'Мышь проводная Logitech G502 Hero', img: mice3, price: '3999₽', isPremium: false },
        { id: 'mice4', name: 'Мышь беспроводная A4TECH Bloody R90 Plus', img: mice4, price: '4199₽', isPremium: true },
        { id: 'mice5', name: 'Мышь беспроводная Oklick 780GW', img: mice5, price: '989₽', isPremium: false },
        { id: 'mice6', name: 'Мышь проводная Logitech G102 LightSync', img: mice6, price: '1949₽', isPremium: false },
        { id: 'mice7', name: 'Мышь проводная A4TECH Bloody W95 Max', img: mice7, price: '3499₽', isPremium: false },
        { id: 'mice8', name: 'Мышь проводная A4TECH X-710BK', img: mice8, price: '1999₽', isPremium: false },
        { id: 'mice9', name: 'Мышь беспроводная A4TECH Bloody R90 Plus Naraka', img: mice9, price: '4199₽', isPremium: true },
        { id: 'mice10', name: 'Мышь беспроводная Logitech G502 X Plus', img: mice10, price: '13 999₽', isPremium: true },
    ];

    const keyboards = [
        { id: 'keyboard1', name: 'Клавиатура Razer Huntsman V2 TKL', img: keyboard1, price: '14 490₽', isPremium: true },
        { id: 'keyboard2', name: 'Клавиатура Acer OKW305', img: keyboard2, price: '4499₽', isPremium: false },
        { id: 'keyboard3', name: 'Клавиатура MSI VIGOR GK41 DUSK LR RU', img: keyboard3, price: '4999₽', isPremium: false },
        { id: 'keyboard4', name: 'Клавиатура A4TECH Bloody S515R', img: keyboard4, price: '5490₽', isPremium: false },
        { id: 'keyboard5', name: 'Клавиатура A4TECH Bloody S98 Naraka BLMS Plus', img: keyboard5, price: '7999₽', isPremium: true },
        { id: 'keyboard6', name: 'Клавиатура A4TECH Bloody B820R', img: keyboard6, price: '8499₽', isPremium: true },
        { id: 'keyboard7', name: 'Клавиатура A4TECH Bloody AT87 Proxy Boom', img: keyboard7, price: '7990₽', isPremium: true },
        { id: 'keyboard8', name: 'Клавиатура Acer OKW300', img: keyboard8, price: '1349₽', isPremium: false },
        { id: 'keyboard9', name: 'Клавиатура GMNG GG-KB780X', img: keyboard9, price: '2906₽', isPremium: false },
        { id: 'keyboard10', name: 'Клавиатура GMNG GG-KB783XPW', img: keyboard10, price: '4872₽', isPremium: false },
    ];

    const chairs = [
        { id: 'chair1', name: 'Кресло игровое ZOMBIE Rudger', img: chair1, price: '8790₽', isPremium: false },
        { id: 'chair2', name: 'Кресло игровое AROZZI Vernazza Soft Fabric', img: chair2, price: '41 650₽', isPremium: true },
        { id: 'chair3', name: 'Кресло игровое A4TECH Bloody GC-740', img: chair3, price: '23 990₽', isPremium: false },
        { id: 'chair4', name: 'Кресло игровое COUGAR Armor S', img: chair4, price: '32 999₽', isPremium: true },
        { id: 'chair5', name: 'Кресло игровое ZONE 51 Cyberpunk', img: chair5, price: '31 990₽', isPremium: true },
        { id: 'chair6', name: 'Кресло игровое BRABIX GT Carbon GM-120', img: chair6, price: '21 930₽', isPremium: false },
        { id: 'chair7', name: 'Кресло игровое EUREKA Norn', img: chair7, price: '24 990₽', isPremium: false },
        { id: 'chair8', name: 'Кресло игровое ZOMBIE Predator', img: chair8, price: '13 490₽', isPremium: false },
        { id: 'chair9', name: 'Кресло игровое ZOMBIE Thunder 1', img: chair9, price: '13 690₽', isPremium: false },
        { id: 'chair10', name: 'Кресло игровое Oklick Cooldown', img: chair10, price: '10 290₽', isPremium: false },
    ];

    const gamepads = [
        { id: 'gamepad1', name: 'Геймпад беспроводной PlayStation DualSense', img: gamepad1, price: '9190₽', isPremium: true },
        { id: 'gamepad2', name: 'Геймпад Thrustmaster Eswap S Pro', img: gamepad2, price: '8439₽', isPremium: true },
        { id: 'gamepad3', name: 'Геймпад беспроводной EASYSMX X15', img: gamepad3, price: '4899₽', isPremium: true },
        { id: 'gamepad4', name: 'Геймпад беспроводной PlayStation DualSense Edge', img: gamepad4, price: '33 290₽', isPremium: true },
        { id: 'gamepad5', name: 'Геймпад проводной Logitech F310', img: gamepad5, price: '3399₽', isPremium: false },
        { id: 'gamepad6', name: 'Геймпад беспроводной SPEEDLINK Strike NX', img: gamepad6, price: '1959₽', isPremium: false },
        { id: 'gamepad7', name: 'Геймпад беспроводной A4TECH Bloody GPW70 Sports', img: gamepad7, price: '5690₽', isPremium: true },
        { id: 'gamepad8', name: 'Геймпад беспроводной Ritmix GP-022WPS', img: gamepad8, price: '1250₽', isPremium: false },
        { id: 'gamepad9', name: 'Геймпад беспроводной Sven GC-5050', img: gamepad9, price: '2899₽', isPremium: false },
        { id: 'gamepad10', name: 'Геймпад беспроводной EASYSMX X05', img: gamepad10, price: '3399₽', isPremium: false },
    ];

    const headphones = [
        { id: 'headphones1', name: 'Гарнитура игровая Razer Blackshark V2 X,', img: headphones1, price: '5290₽', isPremium: false },
        { id: 'headphones2', name: 'Гарнитура игровая MSI Immerse GH20', img: headphones2, price: '2579₽', isPremium: false },
        { id: 'headphones3', name: 'Гарнитура игровая Logitech G435', img: headphones3, price: '7499₽', isPremium: true },
        { id: 'headphones4', name: 'Гарнитура Logitech G432', img: headphones4, price: '5999₽', isPremium: false },
        { id: 'headphones5', name: 'Гарнитура игровая Edifier G20', img: headphones5, price: '2390₽', isPremium: false },
        { id: 'headphones6', name: 'Гарнитура игровая HYPERX Cloud Alpha S Blackout', img: headphones6, price: '12 499₽', isPremium: true },
        { id: 'headphones7', name: 'Гарнитура игровая Acer Nitro OHW306', img: headphones7, price: '2499₽', isPremium: false },
        { id: 'headphones8', name: 'Гарнитура игровая HYPERX Cloud Stinger 2 Core', img: headphones8, price: '5499₽', isPremium: false },
        { id: 'headphones9', name: 'Гарнитура игровая Razer Barracuda X', img: headphones9, price: '10 399₽', isPremium: false },
        { id: 'headphones10', name: 'Гарнитура игровая A4TECH Bloody MC750', img: headphones10, price: '6599₽', isPremium: true },
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