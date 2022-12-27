import { ReactNode } from "react"
import { ApplyNetHomeTrueVisionIcon, BoxTrueIDSimIcon, MobileIcon, MyLotusIcon, SimIcon, SimTransferIcon, SpecialCPGroup, SpecialFriendMember } from "../utils/import/import_icons_main"

export type SaleProductModel = {
    icon: ReactNode,
    title: string,
    isTwoLine: boolean,
    json?: {}
}

export const saleProductModels: SaleProductModel[] = [
    {icon: <MobileIcon />, title: 'มือถือ', isTwoLine: false, json: {route1: 'Main', route2: "SelectNumber"}},
    {icon: <MyLotusIcon />, title: 'สิทธิพิเศษสำหรับสมาชิกโลตัส', isTwoLine: true},
    {icon: <SimIcon />, title: 'ซิมเบอร์ใหม่', isTwoLine: false},
    {icon: <SimIcon />, title: 'ซิมเติมเงินพร้อมเบอร์', isTwoLine: false},
    {icon: <SimTransferIcon />, title: 'ย้ายค่ายเบอร์เดิม', isTwoLine: false},
    {icon: <ApplyNetHomeTrueVisionIcon />, title: 'สมัครเน็ตบ้านทรู / ทีวีทรูวิชั่นส์', isTwoLine: true},
    {icon: <BoxTrueIDSimIcon />, title: 'กล่อง TrueID พร้อมซิมเบอร์ใหม่', isTwoLine: true},
    {icon: <SpecialCPGroup />, title: 'สิทธิพิเศษสำหรับพนักงานในเครือ CP', isTwoLine: true},
    {icon: <SpecialFriendMember />, title: 'สิทธิพิเศษสำหรับเพื่อนสมาชิก', isTwoLine: true}
]