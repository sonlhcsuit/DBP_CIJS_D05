// import { Emoji } from '../Components/Emoji'
import {Emoji} from '../Components/Emoji'
export function createEmojis(emojis) {
    console.log(emojis)
    let len = emojis.length > 20 ? 20 : emojis.length
    let elist_ = []
    for (let i = 0; i < len; i++) {
        elist_.push(
            <Emoji symbol={emojis[i].symbol} title={emojis[i].title} />
        )
    }
    return elist_
}
export function filterEmoji(searchText, data) {
    return data.filter((value) => {
        return value.keywords.indexOf(searchText) != -1
    })
}