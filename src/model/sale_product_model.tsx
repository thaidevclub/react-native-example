import { ReactNode } from "react"
import { CameraIcon, ScanBarCodeIcon } from "../utils/import/import_icons"
import { ApplyNetHomeTrueVisionIcon, BoxTrueIDSimIcon, MobileIcon, MyLotusIcon, SimIcon, SimTransferIcon, SpecialCPGroup, SpecialFriendMember } from "../utils/import/import_icons_main"

export type SaleProductModel = {
    [x: string]: any
    icon: ReactNode,
    title: string,
    titleButton: string,
    iconTitleButton: ReactNode,
    isTwoLine: boolean,
    route1?: string,
    route2?: string,
    route3?: string,
    route4?: string,
    route5?: string
}

export const saleProductModels: SaleProductModel[] = [
    {icon: <MobileIcon />, title: 'มือถือ', titleButton: 'เลือกเบอร์', iconTitleButton: <ScanBarCodeIcon />, isTwoLine: false, route1: "SelectNumber", route2: "Verification", route3: "Consent", route4: "TestHome", route5: "Success"},
    {icon: <MyLotusIcon />, title: 'สิทธิพิเศษสำหรับสมาชิกโลตัส', titleButton: 'Verified', iconTitleButton: <SimIcon />, isTwoLine: true, route1: "Consent", route2: "TestHome", route3: "Verification", route4: "SelectNumber" , route5: "Success"},
    {icon: <SimIcon />, title: 'ซิมเบอร์ใหม่', titleButton: '', iconTitleButton: <SimTransferIcon />, isTwoLine: false, route1: ''},
    {icon: <SimIcon />, title: 'ซิมเติมเงินพร้อมเบอร์', titleButton: '', iconTitleButton: <SpecialFriendMember />, isTwoLine: false},
    {icon: <SimTransferIcon />, title: 'ย้ายค่ายเบอร์เดิม', titleButton: '', iconTitleButton: <ScanBarCodeIcon />, isTwoLine: false},
    {icon: <ApplyNetHomeTrueVisionIcon />, title: 'สมัครเน็ตบ้านทรู / ทีวีทรูวิชั่นส์', titleButton: '', iconTitleButton: <CameraIcon />, isTwoLine: true},
    {icon: <BoxTrueIDSimIcon />, title: 'กล่อง TrueID พร้อมซิมเบอร์ใหม่', titleButton: '', iconTitleButton: <CameraIcon />, isTwoLine: true},
    {icon: <SpecialCPGroup />, title: 'สิทธิพิเศษสำหรับพนักงานในเครือ CP', titleButton: '', iconTitleButton: <SimTransferIcon />, isTwoLine: true},
    {icon: <SpecialFriendMember />, title: 'สิทธิพิเศษสำหรับเพื่อนสมาชิก', titleButton: '', iconTitleButton: <CameraIcon />, isTwoLine: true}
]