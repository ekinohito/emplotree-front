import { useRouter } from "next/router"

export enum Tokens {
    EMPLOTREE,
    LOGIN,
    REGISTER,
    EMAIL,
    PASSWORD,
    NAME,
    LOGIN_PROMPT,
    REGISTER_PROMPT,
    LOGOUT,
    LOGIN_FIRST,
    ADD_CONNECTION,
    SEARCH,
    ADD,
}

export type Token = keyof typeof Tokens

export enum Locales {
    ru,
    en,
}

export type Locale = keyof typeof Locales

export type Translation = Record<Token, string>

export type Dictionary = Record<Locale, Translation>

const DICTIONARY: Dictionary = {
    en: {
        EMAIL: "e-mail",
        EMPLOTREE: "emplotree",
        LOGIN: "login",
        LOGIN_PROMPT: "Enter your e-mail and password to login",
        LOGOUT: "logout",
        NAME: "name",
        PASSWORD: "password",
        REGISTER: "register",
        REGISTER_PROMPT: "Fill the fields below to register a new account",
        LOGIN_FIRST: "You must log in before you can see anything",
        ADD_CONNECTION: "Add subordinary",
        SEARCH: "search",
        ADD: "add"
    },
    ru: {
        EMAIL: "e-mail",
        EMPLOTREE: "зачетная",
        LOGIN: "войти",
        LOGIN_PROMPT: "Введите почту и пароль чтобы войти",
        LOGOUT: "выйти",
        NAME: "имя",
        PASSWORD: "пароль",
        REGISTER: "регистрация",
        REGISTER_PROMPT: "Для регистрации заполните форму ниже",
        LOGIN_FIRST: "Сначала войдите или зарегистрируйтесь",
        ADD_CONNECTION: "Добавить подчиненного",
        SEARCH: "поиск",
        ADD: "добавить",
    }
}

export default function useTokens(): Translation {
    const { locale } = useRouter()
    return (DICTIONARY as any)[locale ?? 'ru'] ?? DICTIONARY['ru']
}