import { card1, card2, card3 } from "../assets";

export const SectionEndCardMap = [
    {
        img: card1,
        data: "14.04.2022",
        text: "УЧЕНЫЕ ВЫРАСТИЛИ КЛЕТКИ СО ВЖИВЛЕННОЙ В НИХ ЭЛЕКТРОНИКОЙ",
        author: "Автор: Константин К.Р"
    },
    {
        img: card2,
        data: "17.03.2022",
        text: "Власти поменяли лимит финансирования больниц для закупки лекарств",
        author: "Автор: Александра К.Р"
    },
    {
        img: card3,
        data: "15.05.2020",
        text: "Мантуров сообщил о проверке аппаратов ИВЛ на уральском заводе",
        author: "Автор: Павел С.А"
    },
]



export const ul_list = [
    {
        li: "О компании",
    },
    {
        li: "Производители ",
    },
    {
        li: "Доставка",
    },
    {
        li: "Оплата",
    },
    {
        // path:"/News",
        li: "Новости",
        // element:<News/>
    },
    {
        li: "Реквизиты",
    },
    {
        // path:"/contact",
        li: "Контакты",
        // element:<Contact/>
    }
]

const navbar = [
    {
        path: "*",
        name: "/О компании"
        // Page: 
    }
]