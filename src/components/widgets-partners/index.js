import {useSelector} from "react-redux"

import {budRu} from "./widgets/bud-ru"
import {budEn} from "./widgets/bud-en"
import {polskaLiga} from "./widgets/polska-liga"
import {esfa} from "./widgets/esfa";
import {nigeria} from "./widgets/nigeria";
import {voka} from "./widgets/voka";

const WidgetPartners = () => {
    const userData = useSelector(props => props.userData)

    if (!userData)
        return false

    switch (userData.event) {
        case 'bud_ru':
            if (userData.age >= 18) {
                return userData.country === 'GB' ? budEn() : budRu()
            } else {
                return false
            }
        case 'bud_uk':
            if (userData.age >= 18) {
                return userData.country === 'GB' ? budEn() : budRu()
            } else {
                return false
            }
        case 'polskaliga':
            return polskaLiga()
        case 'esfa':
            return esfa()
        case 'nigeria':
            return nigeria()
        case 'voka':
            return voka()
        default:
            return false
    }
}

export default WidgetPartners