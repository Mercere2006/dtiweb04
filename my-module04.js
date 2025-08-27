//สร้างแบบ ESModule
export const sauZZ ='Southest Asia University'; //const คือค่าที่ไม่สามารถเปลี่ยนแปลงได้

export let scoreZZ = 999

export function sumNumberZZ(n1, n2){
    return n1 + n2;
}

//--------------------------------------------------------------------------
//const squareAreaZZ = (wi, lo) => { //ห้ามมี let , const
//    return wi * lo
//}

//export default  squareAreaZZ = (wi, lo) => { //ห้ามมี let , const
//    return wi * lo
//}
//--------------------------------------------------------------------------

export default (wi, lo) => { //ห้ามมี let , const
    return wi * lo
}